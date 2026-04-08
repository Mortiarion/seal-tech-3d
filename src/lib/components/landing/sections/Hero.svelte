<script lang='ts'>
	import Arrow from "$lib/components/icons/Arrow.svelte";

    const layers = Array.from({ length: 20 }, (_, i) => i);
</script>

<section class="hero container mx-auto pl-5 lg:pl-10 xl:pl-20 relative ">
	<div class="grid grid-cols-2 ">

		<!-- pl-20 pt-56 pb-10 -->
		<div class="hero-left flex flex-col justify-center pt-30 md:pt-56 pb-5 ">
			<h2>
				3D Друк 
			</h2>
	
			<h1>
				Where 
				<span>
					ideas <br />
				</span>
				become
				<span>
					real <br />
				</span>
			</h1>
	
			<a href="#contact" 
				class="main-link" 
				title="Перейти до секції контактів" 
				aria-label="Перейти до секції контактів"
			>
				Замовити 
				<span>
					<Arrow />
				</span>
			</a>
			
		</div>
	
		<div class="hero-right flex items-center justify-center relative ">
			<!-- <div class="hero-right-bg"></div> -->
	
			<div class="hero-visual hidden md:block md:mt-[40%]">
				<div class="layer-stack absolute inset-0 flex flex-col-reverse items-center justify-center gap-1">
					
					{#each layers as i (i)}
						<div class="layer"></div>
					{/each}
					
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.hero {

		&::before {
			position: absolute;
			z-index: -23;
			/* right: 100%; */
			left: 99%;
			display: flex;
			flex: 1;
			content: '';
			background-color: var(--mid);
			/* clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%); */
			width: 100%;
			height: 100%;

		}
		.hero-left {
			h1 {
				font-family: var(--font-display);
				/* font-size: 10rem; */
				font-size: 3rem;
				line-height: 0.9;
				/* letter-spacing: -0.4rem; */
				margin-bottom: 2rem;
		
				span {
					&:nth-child(1) {
						color: var(--accent);
					}
					&:nth-child(2) {
						color: var(--orange);
					}
				}
			}
		}

		.hero-right {
			position: relative;

			&::after {
				position: absolute;
				content: '';
				z-index: -1;
				right: 0;
				left: 0;
				/* inset: 0; */
				width: 100%;
				height: 100%;
				background-color: var(--mid);
				clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
			}
			.hero-right-bg {
				/* position: absolute;
				z-index: -1;
				inset: 0;
				background-color: var(--mid);
				clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%); */
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
		}
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

	@media (width >= 48rem) {
		.hero {
			.hero-left {

				h1 {
					font-size: 6rem;
					width: auto;
				}
			}
		}
	}

	@media (width >= 64rem) {
		.hero {
			.hero-left {
				h1 {
					font-size: 8rem;
				}
			}
		}
	}
</style>
