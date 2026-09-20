<section class="services border-bottom">
	<div class="container">
		<div class="border-bottom pt-10">
			<span class="main-section-label"> ПОСЛУГИ </span>
		</div>

		<div class="services-grid pb-10 md:grid-cols-2">
			<div class="service-card">
				<div class="service-num">01</div>

				<div class="service-title">СЕРІЙНИЙ ДРУК</div>

				<p class="service-desc">
					Малі та середні тиражі з однаковою якістю в кожній деталі. Гнучкі строки, конкурентні
					ціни.
				</p>
			</div>

			<div class="service-card">
				<div class="service-num">02</div>

				<div class="service-title">CUSTOM ВИРОБИ</div>

				<p class="service-desc">
					Декор, сувеніри, cosplay-реквізит, подарунки — допоможемо з ескізом або в створенні
					3D-файлому для друку.
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.services {
		background: var(--mid);
		.services-grid {
			display: grid;
			gap: 2px;

			.service-card {
				background: var(--black);
				padding: 3rem 2.5rem;
				position: relative;
				overflow: hidden;
				transition: background 0.3s;

				&::before {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					width: 0;
					height: 2px;
					background: var(--orange);
					transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
				}

				&:hover::before {
					width: 100%;
				}

				&:hover {
					background: #111;
				}

				.service-num {
					font-family: var(--font-display);
					font-size: 4rem;
					color: #222;
					line-height: 1;
					margin-bottom: 1.5rem;
					transition: color 0.3s;
				}

				&:hover .service-num {
					color: var(--accent-green);
				}

				&:hover .service-title {
					color: var(--orange);
				}

				.service-title {
					font-family: var(--font-display);
					font-size: 1.6rem;
					letter-spacing: 0.05em;
					color: var(--white);
					margin-bottom: 1rem;
				}

				.service-desc {
					font-size: 0.9rem;
					line-height: 1.7;
					color: var(--gray);
					font-weight: 300;
				}
			}
		}
	}
</style>
