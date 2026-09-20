<script lang="ts">
	import Arrow from '$lib/components/icons/Arrow.svelte';
</script>

<section class="portfolio border-bottom" id="portfolio">
	<div class="container">
		<div class="portfolio-inner py-10 md:grid-cols-2">
			<div class="portfolio-left">
				<span class="main-section-label"> Портфоліо </span>

				<h3 class="portfolio-title">НАШІ РОБОТИ</h3>

				<p class="portfolio-desc">
					Ми пишаємося кожним проектом, який ми реалізували, і раді поділитися деякими з них з вами
				</p>

				<a href="/portfolio" class="main-link">
					Переглянути все
					<span>
						<Arrow />
					</span>
				</a>
			</div>

			<div class="portfolio-collage hidden lg:block">
				<div class="portfolio-item pi-center">
					<div class="portfolio-img-wrap">
						<img src="/portfolio-img/heart-mria.png" alt="heart-mria" loading="lazy" />
					</div>

					<p class="item-name">Годинник з підсвіткою "Серце Мрії"</p>
				</div>

				<div class="portfolio-item pi-left">
					<div class="portfolio-img-wrap">
						<img src="/portfolio-img/kniga-shevshenko.png" alt="kniga-shevshenko" loading="lazy" />
					</div>

					<p class="item-name">Нагорода до конкурсу Шевченка</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.portfolio {
		position: relative;

		/* bg-portfolio */
		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background-image:
				linear-gradient(var(--border) 1px, transparent 1px),
				linear-gradient(90deg, var(--border) 1px, transparent 1px);
			background-size: 60px 60px;
			opacity: 0.35;
			pointer-events: none;
		}

		.portfolio-inner {
			position: relative;
			z-index: 1;
			display: grid;
			gap: 5rem;
			align-items: center;

			.portfolio-left {
				display: flex;
				flex-direction: column;

				.portfolio-title {
					font-size: clamp(4rem, 7vw, 8rem);
					margin-bottom: 2rem;
				}

				.portfolio-desc {
					line-height: 1.3;
					color: var(--gray);
					margin-bottom: 2rem;
				}

				.main-link {
					display: flex;
					gap: 1rem;
					font-weight: 600;
					letter-spacing: 0.2rem;
					text-transform: uppercase;
					color: var(--white);
					background-color: var(--green);
					font-size: 1rem;
					padding: 1rem;
					align-items: center;
					transition:
						background-color 0.3s,
						color 0.3s;
					width: fit-content;

					&:hover {
						background-color: var(--orange);
						color: var(--white);
					}

					span {
						transition: transform 0.3s;
					}

					&:hover span {
						transform: translateX(4px);
					}
				}
			}

			.portfolio-collage {
				position: relative;
				height: 520px;

				.portfolio-item {
					position: absolute;
					background: var(--mid);
					cursor: pointer;
					display: flex;
					flex-direction: column;
					transition: box-shadow 0.3s;

					&:hover {
						z-index: 10;
						box-shadow: 0 20px 56px rgba(0, 0, 0, 0.75);

						& img {
							transform: scale(1.1);
						}

						& .portfolio-img-wrap::after {
							opacity: 1;
						}

						&::before {
							height: 100%;
						}

						& .item-name {
							background: #1c1c1c;
						}
					}

					/* green accent bar slides down on hover */
					&::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						width: 3px;
						height: 0;
						background: var(--accent-green);
						z-index: 6;
						transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
					}

					/* image fills space above label */
					.portfolio-img-wrap {
						position: relative;
						flex: 1;
						min-height: 0;
						overflow: hidden;

						& img {
							width: 100%;
							height: 100%;
							object-fit: cover;
							position: relative;
							z-index: 1;
							transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
						}

						/* img bg bottom opacity */
						&::after {
							content: '';
							position: absolute;
							inset: 0;
							background: linear-gradient(to top, rgba(10, 10, 10, 0.78) 0%, transparent 55%);
							z-index: 2;
							opacity: 0;
							transition: opacity 0.3s;
						}
					}

					&.pi-center,
					&.pi-left {
						/* shared styles for all portfolio items */
						border: 1px solid var(--border);
						outline: 2px solid rgba(255, 255, 255, 0.07);
						outline-offset: 8px;
						isolation: isolate;
					}
					/* 01 — tall portrait, center, full height */
					&.pi-center {
						left: 28%;
						top: 0;
						width: 46%;
						height: 100%;
						/* z-index: 1; */
					}

					/* 02 — square, left side, vertically centered */
					&.pi-left {
						left: -5%;
						top: 20%;
						width: 42%;
						height: 62%;
						/* z-index: 2; */
					}

					.item-name {
						padding: 0.65rem 0.9rem;
						border-top: 1px solid var(--border);
						transition: background 0.2s;
						font-size: 0.75rem;
					}
				}
			}
		}
	}
</style>
