<script lang='ts'>
    const layers = Array.from({ length: 20 }, (_, i) => i);
</script>

<section class="hero grid grid-cols-2 relative">
	<div class="hero-left flex flex-col pt-56 pl-20 pb-12 relative">
		<div class="hero-tag">
			3D Друк · Місто героїв Гостомель
		</div>

		<h1>
			МИ
			<span>ДРУКУ-</span>
			ЄМО ІДЕЇ
		</h1>

		<p class="hero-desc">
			Маленька команда з великими можливостями. Прототипи, деталі, 
			унікальні вироби — від файлу до
			готового об'єкта за лічені години.
		</p>

		<a href="#contact" class="hero-cta">
			Замовити <span class="hero-cta-arrow">→</span>
		</a>

		<!-- <div class="scroll-hint">
			<span class="scroll-line"></span>
			Гортай
		</div> -->
	</div>

	<div class="hero-right flex items-center justify-center relative">
		<div class="hero-right-bg"></div>

		<div class="hero-visual">
			<div class="layer-stack absolute inset-0 flex flex-col-reverse items-center justify-center gap-1">
				
                {#each layers as i (i)}
                    <div class="layer"></div>
                {/each}
                
			</div>
		</div>

		<div class="print-counter">
			<div class="num">
				500+
			</div>

			<div class="label">
				Проектів виконано
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.hero {
		.hero-left {
			.hero-tag {
				font-size: 0.75rem;
				letter-spacing: 0.3rem;
				text-transform: uppercase;
				color: var(--accent);
				font-weight: 600;
				margin-bottom: 1.5rem;
				display: flex;
				align-items: center;
				gap: 0.8rem;
		
				&::before {
					content: '';
					width: 2rem;
					height: 1px;
					background: var(--accent);
				}
			}

			h1 {
				font-family: var(--font-display);
				font-size: clamp(5rem, 9vw, 10rem);
				line-height: 0.9;
				letter-spacing: -0.4rem;
				color: var(--white);
				margin-bottom: 2rem;
		
				> span {
					color: var(--accent);
					display: block;
				}
			}

			.hero-desc {
				line-height: 1.7;
				color: var(--gray);
				max-width: 23.75rem;
				font-weight: 300;
				margin-bottom: 3rem;
			}
		
			.hero-cta {
				display: flex;
				gap: 1rem;
				font-weight: 600;
				letter-spacing: 0.2rem;
				text-transform: uppercase;
				color: var(--black);
				background-color: var(--white);
				padding: 1rem 2rem;
				transition:
					background-color 0.2s,
					color 0.2s;
				width: fit-content;
		
				&:hover {
					background: var(--accent);
					color: var(--white);
				}
		
				.hero-cta-arrow {
					transition: transform 0.2s;
					margin-top: -0.1rem;
				}
		
				&:hover .hero-cta-arrow {
					transform: translateX(4px);
				}
			}

			/* .scroll-hint {
				position: absolute;
				bottom: 2.5rem;
				left: 3rem;
				display: flex;
				align-items: center;
				gap: 1rem;
				font-size: 0.7rem;
				letter-spacing: 0.15em;
				text-transform: uppercase;
				color: var(--gray);

				.scroll-line {
					width: 40px;
					height: 1px;
					background: var(--gray);
					position: relative;
					overflow: hidden;

					&::after {
						content: '';
						position: absolute;
						top: 0;
						left: -100%;
						width: 100%;
						height: 100%;
						background: var(--accent);
						animation: scrollSlide 1.5s ease-in-out infinite;
					} 
				}
			} */
		}

		.hero-right {
			.hero-right-bg {
				position: absolute;
				inset: 0;
				background-color: var(--mid);
				clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
			}

			.hero-visual {
				position: relative;
				width: 400px;
				height: 400px;

				.layer-stack {

					.layer {
						height: 6px;
						border-radius: 2px;
						background: linear-gradient(90deg, var(--accent), var(--orange));
						animation: buildUp 2.5s ease-out infinite;
						opacity: 0;

						&:nth-child(1) {
							width: 40px;
							animation-delay: 0.05s;
						}
						&:nth-child(2) {
							width: 80px;
							animation-delay: 0.1s;
						}
						&:nth-child(3) {
							width: 120px;
							animation-delay: 0.15s;
						}
						&:nth-child(4) {
							width: 155px;
							animation-delay: 0.2s;
						}
						&:nth-child(5) {
							width: 185px;
							animation-delay: 0.25s;
						}
						&:nth-child(6) {
							width: 210px;
							animation-delay: 0.3s;
						}
						&:nth-child(7) {
							width: 228px;
							animation-delay: 0.35s;
						}
						&:nth-child(8) {
							width: 240px;
							animation-delay: 0.4s;
						}
						&:nth-child(9) {
							width: 248px;
							animation-delay: 0.45s;
						}
						&:nth-child(10) {
							width: 252px;
							animation-delay: 0.5s;
						}
						&:nth-child(11) {
							width: 252px;
							animation-delay: 0.55s;
						}
						&:nth-child(12) {
							width: 248px;
							animation-delay: 0.6s;
						}
						&:nth-child(13) {
							width: 240px;
							animation-delay: 0.65s;
						}
						&:nth-child(14) {
							width: 228px;
							animation-delay: 0.7s;
						}
						&:nth-child(15) {
							width: 210px;
							animation-delay: 0.75s;
						}
						&:nth-child(16) {
							width: 185px;
							animation-delay: 0.8s;
						}
						&:nth-child(17) {
							width: 155px;
							animation-delay: 0.85s;
						}
						&:nth-child(18) {
							width: 120px;
							animation-delay: 0.9s;
						}
						&:nth-child(19) {
							width: 80px;
							animation-delay: 0.95s;
						}
						&:nth-child(20) {
							width: 40px;
							animation-delay: 1s;
						}
					}
				}
			}

			.print-counter {
				position: absolute;
				bottom: 5rem;
				right: 3rem;
				text-align: right;

				& .num {
					font-family: var(--font-display);
					font-size: 5rem;
					line-height: 1;
					color: var(--accent);
				}
			
				& .label {
					font-size: 0.7rem;
					letter-spacing: 0.15em;
					text-transform: uppercase;
					color: var(--gray);
				}
			}
		}
	}

	@keyframes scrollSlide {
		to { left: 100%; }
	}

	@keyframes buildUp {
		from {
			opacity: 0;
			transform: scaleX(0.5);
		}

		to {
			opacity: 1;
			transform: scaleX(1);
		}
	}

</style>
