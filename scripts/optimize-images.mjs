import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

// masters live in assets/ (not served); derived files are written into static/
const SRC_DIR = 'assets/portfolio-img';
const OUT_DIR = 'static/portfolio-img';
const WIDTHS = [640, 1280];

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

const files = (await readdir(SRC_DIR)).filter((f) => f.endsWith('.png'));

for (const file of files) {
	const input = path.join(SRC_DIR, file);
	const base = path.basename(file, '.png');
	const meta = await sharp(input).metadata();
	const before = (await stat(input)).size;

	console.log(`${file}  ${meta.width}x${meta.height}  ${kb(before)}`);

	for (const width of WIDTHS) {
		const target = Math.min(width, meta.width);
		const out = path.join(OUT_DIR, `${base}-${target}.webp`);

		await sharp(input)
			.resize({ width: target, withoutEnlargement: true })
			.webp({ quality: 80, effort: 6 })
			.toFile(out);

		console.log(`   -> ${path.basename(out)}  ${target}px  ${kb((await stat(out)).size)}`);
	}
}

// logo doubles as the favicon source; header renders it at 80px / 180px
const logo = 'assets/logo.png';
const logoMeta = await sharp(logo).metadata();
console.log(`\nlogo.png  ${logoMeta.width}x${logoMeta.height}  ${kb((await stat(logo)).size)}`);

for (const width of [96, 360]) {
	const out = `static/logo-${width}.webp`;
	await sharp(logo).resize({ width }).webp({ quality: 88, effort: 6 }).toFile(out);
	console.log(`   -> logo-${width}.webp  ${kb((await stat(out)).size)}`);
}

for (const size of [48, 180]) {
	const out = `static/favicon-${size}.png`;
	await sharp(logo)
		.resize({ width: size, height: size, fit: 'cover' })
		.png({ compressionLevel: 9 })
		.toFile(out);
	console.log(`   -> favicon-${size}.png  ${kb((await stat(out)).size)}`);
}

// social previews are fetched by absolute URL and many crawlers still refuse webp
const og = 'static/og-image.jpg';
await sharp('assets/portfolio-img/statue-front.png')
	.resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' })
	.flatten({ background: '#0a0a0b' })
	.jpeg({ quality: 82, mozjpeg: true })
	.toFile(og);
console.log(`   -> og-image.jpg  ${kb((await stat(og)).size)}`);
