<script>
	import Arrow from "$lib/components/icons/Arrow.svelte";
	import { ERoutesNames } from "../../../../routes/routing-helpers";
</script>

<section class="portfolio px-20 py-25" id='portfolio'>
	<div class="portfolio-inner">
		<!-- LEFT: text block -->
		<div class="portfolio-left">
			<h2 class="portfolio-label">
				Портфоліо
			</h2>

			<h3 class="portfolio-title">
				НАШІ
				<br />
				РОБОТИ
			</h3>

			<p class="portfolio-desc">
				Ми пишаємося кожним проектом, який ми реалізували, і раді поділитися деякими з них з вами.
			</p>

			<a href={ERoutesNames.portfolioPage} class="main-link">
				Переглянути все
				<span>
					<Arrow />
				</span>

			</a>
		</div>

		<!-- RIGHT: 4-image collage -->
		<div class="portfolio-collage">
			<!-- 01: tall vertical center -->
			<div class="portfolio-item pi-center">
				<div class="portfolio-img-wrap">
					<img src="/portfolio-img/heart-mria.png" alt="heart-mria" loading="lazy" />
				</div>

				<p class="item-name">
					Годинник з підсвіткою "Серце Мрії" 
				</p>
			</div>

			<!-- 02: square left, vertically centered -->
			<div class="portfolio-item pi-left">
				<div class="portfolio-img-wrap">
					<img src="/portfolio-img/kniga-shevshenko.png" alt="kniga-shevshenko" loading="lazy" />
				</div>

				<p class="item-name">
					Нагорода до конкурсу Шевченка
				</p>
			</div>

			<!-- 03: right top -->
			<div class="portfolio-item pi-right-top">
				<div class="portfolio-img-wrap">
					<img src="/portfolio-img/basket.jpg" alt="motanka" loading="lazy" />
				</div>

				<p class="item-name">
					Дизайнерска крафтова сумка
				</p>
			</div>

			<!-- 04: right bottom, overlaps 03 and center -->
			<div class="portfolio-item pi-right-bottom">
				<div class="portfolio-img-wrap">
					<img src="/portfolio-img/motanka.jpg" alt="Project 4" loading="lazy" />
				</div>

				<p class="item-name">
					Берегиня-мотанка
				</p>

			</div>
		</div>
	</div>
</section>

<style lang='postcss'>
	.portfolio {
		position: relative;
		border-top: 1px solid var(--border);

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
		/* gren line top */
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 3rem;
			width: 80px;
			height: 3px;
			background: var(--accent);
		}

		.portfolio-inner {
			position: relative;
			z-index: 1;
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 5rem;
			align-items: center;
	
			.portfolio-left {
				display: flex;
				flex-direction: column;
	
				.portfolio-label {
					font-size: 24px;
					letter-spacing: 0.2rem;
					text-transform: uppercase;
					color: var(--accent);
					display: flex;
					align-items: center;
					gap: 0.75rem;
					margin-bottom: 1.5rem;
				}
			
				.portfolio-label::before {
					content: '';
					width: 2rem;
					height: 1px;
					background: var(--accent);
				}
			
				.portfolio-title {
					font-family: var(--font-display);
					font-size: 6rem;
					line-height: 1;
					letter-spacing: 0.2rem;
					margin-bottom: 2rem;
				}
			
				.portfolio-desc {
					color: var(--gray);
					margin-bottom: 2rem;
				}
			
				.portfolio-link {
					display: flex;
					align-items: center;
					gap: 1rem;
					font-weight: 600;
					letter-spacing: 0.1rem;
					text-transform: uppercase;
					color: var(--black);
					background: var(--accent);
					padding: 1rem 2rem;
					width: fit-content;
					transition:
						background 0.3s,
						color 0.3s,
						gap 0.3s;
				}
			
				.portfolio-link:hover {
					background: var(--white);
					gap: 1.1rem;
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
					transition:
						transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
						box-shadow 0.35s;
		
					&:hover {
						z-index: 10;
						transform: scale(1.04);
						box-shadow: 0 20px 56px rgba(0, 0, 0, 0.75);

						& img {
							transform: scale(1.07);
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
						background: var(--accent);
						z-index: 6;
						transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
							transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
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
					&.pi-left, 
					&.pi-right-top, 
					&.pi-right-bottom {
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
				
					/* 03 — right column, upper half */
					&.pi-right-top {
						right: 0%;
						top: -10%;
						width: 30%;
						height: 58%;
						/* z-index: 3; */
					}
				
					/* 04 — right column, lower half, shifted left to overlap center */
					&.pi-right-bottom {
						right: 4%;
						bottom: -12%;
						width: 30%;
						height: 68%;
						/* z-index: 2; */
					}

					.item-name {
						display: flex;
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
