<script lang="ts">
	import { onMount } from 'svelte';
	// для TypeScript, щоб не сварився
	// declare namespace svelteHTML {
	// 	interface IntrinsicElements {
	// 		'model-viewer': any;
	// 	}
	// } це наче пише нада але як відключаю то все гуд

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

	// let showModal = $state(false);
	// let dialog: HTMLDialogElement | null = $state(null);

	// $effect(() => {
	// 	if (!dialog) return;

	// 	if (showModal) {
	// 		dialog.showModal();
	// 	} else if (dialog.open) {
	// 		dialog.close();
	// 	}
	// });
</script>

<svelte:head>
    <title>
        SealTech3D - Портфоліо
    </title>
</svelte:head>

<section class="portfolio">
	<div class="container">

        <div class="portfolio-hero pt-35 md:pt-60">

			<p class="head">
				Від ідеї до готового виробу. Тут ви можете побачити проекти, 
				які ми допомогли втілили в життя. Ваша ідея може бути слідуюча 
			</p>

		</div>

		<div class="portfolio-carousel">
			<button
				class="slide-card"
				onmouseenter={() => (pause = true)}
				onmouseleave={() => (pause = false)}
				// onclick={() => (showModal = true)}
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
				<h2>
                    З'явилась ідея?
                </h2>

				<p>
                    Розкажіть про свою ідею — і ми допоможемо втілити її в реальність.
                </p>
			</div>

			<a href="/#contacts" class="btn primary">
                Розповісти про ідею
            </a>
		</div>
	</div>
</section>

<!-- <dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => { if (e.target === dialog) dialog?.close(); }}
>
	<div>
		<div class="viewer-wrap">
			<model-viewer
				src="/portfolio/models/book-tree-statue-optimized.glb"
				alt="Statue 3D model"
				camera-controls
				touch-action="pan-y"
				auto-rotate
				shadow-intensity="1"
				exposure="1"
				shadow-softness="0.8"
				tone-mapping="commerce"
				environment-image="neutral"
				style="width: 100%; height: 100%; background: transparent;"
			></model-viewer>
		</div>
		<button onclick={() => dialog?.close()}>close modal</button>
	</div>
</dialog> -->



<style lang="postcss">


:root {
	/* --bg-body: #0a0a0b;
	--bg2: #111114;
	--bg3: #18181c;
	--text: #f0ede8; */
	/* --text2: #9e9b94; */
	/* --text3: #5a5855; */
	

	/* --border-main: #ffffff12; */
	/* --border2: #ffffff21; */

	/* --black: #0a0a0a; */
	/* --white: #f0f0f0; */
	/* --lime: #c8ff00; */
	/* --cyan: #00d4ff; */
	/* --mid: #141414; */
	/* --gray: #6b6864; */

	/* --error: #e24b4a;  */
	/* --success: #1d9e75; */

	/* --letter-spacing-title: 0.25rem; */
	/* --letter-spacing-text: 0.0125rem; */

	/* --border-bottom-section: #1e1e1e; */
	/* --header-bg-transparent: #0a0a0bb3; */

	/* --border: #ffffff12; */
	/* --border2: #ffffff21; */

	/* --backdrop-filter: blur(8px); */

	/* --font-display: 'Bebas Neue', sans-serif;
	--font-body: 'DM Sans', sans-serif; */

	/* --red: #e53704;
	--orange: #fd6f00;
	--yellow: #f0cd13;
	--accent-green: #73d62b;
	--green: #03a337; */
}

/* .contact-nav-icon {
	border: 1px solid var(--border);
	padding: 0.5rem;
} */

/* .title-accent-green {
	font-family: var(--font-display);
	font-size: 3rem;
	margin-bottom: 1rem;
	font-weight: 600;
	text-transform: uppercase;
	color: var(--text);

	span {
		color: var(--accent-green);
	}
} */

.btn {
	padding: 0.75rem 1.25rem;
	font-weight: 600;
	cursor: pointer;
	transition: color 0.3s ease, background-color 0.3s ease;

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

/* .subtitle {
	color: var(--text2);
	font-size: 1rem;
	max-width: 320px;
	line-height: 1.5;
	margin-bottom: 2rem;
} */
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

	.viewer-wrap {
		aspect-ratio: 1 / 3;
		width: 300px;
		height: 400px;
		
		border-radius: 12px;
		overflow: hidden;
		background: var(--bg3);
	}

	.portfolio-carousel {
		nin-width: 200px;
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











	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
