<script lang='ts'>
	import { ERoutesNames } from "../../../../routes/routing-helpers";

</script>

<section class="contact-section" id="contact">
	<div>
		<h2>
			ЗВ'ЯЖІТЬСЯ З НАМИ
		</h2>

		<p class="contact-sub">
			Розкажіть про ваш проект — і ми допоможемо втілити вашу ідею в життя. 
			Без зайвих питань, з особистим підходом.
		</p>

		<div class="contact-links">
			<a href="tel:1234567890" class="contact-link">
				<div class="contact-link-inner">
					<div class="contact-icon">
						☎
					</div>
					Подзвонити нам
				</div>

				<span class="contact-arrow">
					↗
				</span>

			</a>

			<a href="https://t.me/yourusername" class="contact-link" target="_blank" rel="noopener">
				<div class="contact-link-inner">
					<div class="contact-icon">
						✈
					</div>
					Telegram
				</div>

				<span class="contact-arrow">
					↗
				</span>
			</a>
		</div>
	</div>

	<!-- <div class="contact-big" aria-hidden="true"> -->
		<!-- <div class="contact-big-text">
			Seal
			<br/>
			Tech
			<br/>
			3D
		</div> -->
		<a href={ERoutesNames.root} title="Головна">
            <img src="logo.png" width="540" loading="lazy" alt="logo">
		</a>
	<!-- </div> -->
</section>

<style lang="postcss">
	/* ── CONTACT ── */
	h2 {
		color: var(--accent);
		/* font-size: 20px; */
	}
	.contact-section {
		padding: 8rem 3rem;
		background: var(--black);
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 6rem;
		align-items: center;
		border-top: 1px solid #222;
	}

	.contact-section h2 {
		margin-bottom: 1rem;
	}

	.contact-sub {
		font-size: 1rem;
		color: var(--gray);
		font-weight: 300;
		line-height: 1.7;
		margin-bottom: 3rem;
	}

	.contact-links {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}

	.contact-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 2rem;
		background: var(--mid);
		text-decoration: none;
		color: var(--white);
		transition:
			background 0.2s,
			color 0.2s;
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: 0.05em;
	}

	.contact-link:hover {
		background: var(--accent);
		color: var(--white);
	}

	.contact-link-inner {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.contact-icon {
		width: 36px;
		height: 36px;
		border: 1px solid #333;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.9rem;
		transition: border-color 0.2s;
	}

	.contact-link:hover .contact-icon {
		border-color: rgba(255, 255, 255, 0.3);
	}

	.contact-arrow {
		font-size: 1rem;
		transition: transform 0.2s;
	}

	.contact-link:hover .contact-arrow {
		transform: translate(3px, -3px);
	}

	.contact-big {
		text-align: center;
	}

	.contact-big-text {
		font-family: var(--font-display);
		font-size: clamp(4rem, 8vw, 9rem);
		line-height: 0.9;
		color: var(--white);
		opacity: 0.05;
		user-select: none;
		letter-spacing: -0.02em;
	}
</style>
