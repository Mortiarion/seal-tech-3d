import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
	const site = url.origin;

	const pages = [
		{ loc: `${site}/`, priority: '1.0', changefreq: 'monthly' },
		{ loc: `${site}/portfolio`, priority: '0.8', changefreq: 'monthly' }
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(p) => `  <url>
    <loc>${p.loc}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
