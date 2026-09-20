<script lang="ts">
	import { onMount } from 'svelte';

	type TView = 'front' | 'back';

	interface ISlideImages {
		src: string;
		alt: string;
	}

	const slideImages: Record<TView, ISlideImages> = {
		front: {
			src: '/portfolio-img/statue-front.png',
			alt: 'Statue front view'
		},
		back: {
			src: '/portfolio-img/statue-back.png',
			alt: 'Statue back view'
		}
	};

	const slideOrder: TView[] = ['front', 'back'];
	let activeSlide = $state(0);
	let currentView = $derived(slideOrder[activeSlide]);
	let currentImage = $derived(slideImages[currentView]);
	let pause = $state(false);

	onMount(() => {
		const interval = setInterval(() => {
			if (!pause) activeSlide = (activeSlide + 1) % slideOrder.length;
		}, 2000);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>SealTech3D - Портфоліо</title>
</svelte:head>

<section class="portfolio">
	<div class="container">
		<div class="portfolio-hero pt-35 md:pt-60">
			<p class="head">
				Від ідеї до готового виробу. Тут ви можете побачити проекти, які ми допомогли втілили в
				життя. Ваша ідея може бути слідуюча
			</p>
		</div>

		<div class="portfolio-carousel">
			<button
				class="slide-card"
				onmouseenter={() => (pause = true)}
				onmouseleave={() => (pause = false)}
			>
				<div class="slide-image">
					<img src={currentImage.src} alt={currentImage.alt} />
				</div>

				<div class="slide-info">
					<span class="slide-number">01</span>
					<span class="slide-title">Statue</span>
					<span class="slide-view">{currentView}</span>
				</div>
			</button>
		</div>

		<div class="portfolio-cta">
			<div class="cta-content">
				<h2>З'явилась ідея?</h2>

				<p>Розкажіть про свою ідею — і ми допоможемо втілити її в реальність.</p>
			</div>

			<a href="/#contacts" class="btn primary"> Розповісти про ідею </a>
		</div>
	</div>
</section>

<style lang="postcss">
	.btn {
		padding: 0.75rem 1.25rem;
		font-weight: 600;
		cursor: pointer;
		transition:
			color 0.3s ease,
			background-color 0.3s ease;

		&.primary {
			background-color: var(--accent-orange2);
			color: var(--white);
			border: none;
			border-radius: 4px;

			@media (hover: hover) {
				&:hover {
					background-color: var(--accent-orange);
					color: var(--white);
				}
			}
		}

		@media (hover: hover) {
			&:hover {
				color: var(--gray);
			}
		}
	}

	.portfolio-hero {
		margin-bottom: 3rem;

		.head {
			padding: 2.5rem;
			background: var(--bg2);
			border: 1px solid var(--border);
			border-radius: 16px;
			font-size: clamp(1rem, 3vw, 1.5rem);
			line-height: 1.2;
			letter-spacing: 0.125rem;
			font-family: var(--font-display);
			color: var(--text2);
		}
	}

	.portfolio-carousel {
		min-width: 200px;
		width: 100%;
		max-width: 400px;
		margin-bottom: 2rem;

		.slide-card {
			display: block;
			position: relative;
			overflow: hidden;

			background: var(--bg2);
			border: 1px solid var(--border);
			border-radius: 12px;

			transition:
				border-color 300ms ease,
				transform 300ms ease,
				box-shadow 300ms ease;
		}

		.slide-image {
			position: relative;
			aspect-ratio: 1 / 1;
			overflow: hidden;
			background: var(--bg3);
		}

		.slide-image::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(
				to bottom,
				transparent 45%,
				color-mix(in srgb, var(--bg-body) 55%, transparent)
			);
			pointer-events: none;
		}

		.slide-image img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			padding: 1.25rem;
			transition: transform 500ms ease;
		}

		.slide-card:hover {
			border-color: var(--accent-green);
			transform: translateY(-6px);
			box-shadow: 0 14px 32px color-mix(in srgb, var(--text) 8%, transparent);
		}

		.slide-card:hover .slide-image img {
			transform: scale(1.05);
		}

		.slide-info {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
			gap: 12px;

			padding: 14px 16px;
			border-top: 1px solid var(--border);
			background: var(--bg2);

			font-family: var(--font-body);
			font-size: 12px;
			text-transform: uppercase;
			letter-spacing: 0.08em;
		}

		.slide-number {
			color: var(--accent-green);
			font-weight: 600;
		}

		.slide-title {
			color: var(--text);
			font-weight: 600;
			letter-spacing: 0.04em;
		}

		.slide-view {
			color: var(--accent-orange);
			font-weight: 500;
		}
	}

	.portfolio-cta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 2.5rem;
		background: var(--bg2);
		border: 1px solid var(--border);
		border-radius: 16px;
		margin: 0 0 2rem 0;

		.cta-content {
			h2 {
				font-family: var(--font-display);
				font-size: clamp(1.6rem, 3vw, 2.2rem);
				text-transform: uppercase;
				margin: 0 0 0.5rem;
				color: var(--text);
			}

			p {
				margin: 0;
				color: var(--text2);
				font-size: 0.95rem;
				line-height: 1.5;
				max-width: 380px;
			}
		}
	}
</style>
