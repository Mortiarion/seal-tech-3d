<script lang="ts">
	interface IProjectImage {
		src: string;
		srcset: string;
		width: number;
		height: number;
		alt: string;
	}

	interface IProject {
		id: string;
		title: string;
		category: string;
		description: string;
		images: IProjectImage[];
	}

	const projects: IProject[] = [
		{
			id: 'statue',
			title: 'Памʼятна статуетка НАПН України',
			category: 'Нагороди',
			description:
				'Статуетка до 100-річчя Інституту педагогіки НАПН України: розгорнута книга на підставці у вигляді переплетених стебел.',
			images: [
				{
					src: '/portfolio-img/statue-front-1254.webp',
					srcset:
						'/portfolio-img/statue-front-640.webp 640w, /portfolio-img/statue-front-1254.webp 1254w',
					width: 1254,
					height: 1254,
					alt: 'Статуетка, вигляд спереду'
				},
				{
					src: '/portfolio-img/statue-back-1254.webp',
					srcset:
						'/portfolio-img/statue-back-640.webp 640w, /portfolio-img/statue-back-1254.webp 1254w',
					width: 1254,
					height: 1254,
					alt: 'Статуетка, вигляд ззаду'
				}
			]
		},
		{
			id: 'heart-mria',
			title: 'Годинник з підсвіткою «Серце Мрії»',
			category: 'Декор',
			description:
				'Настільний годинник з декоративною підсвіткою та індивідуальним дизайном корпусу.',
			images: [
				{
					src: '/portfolio-img/heart-mria-1024.webp',
					srcset:
						'/portfolio-img/heart-mria-640.webp 640w, /portfolio-img/heart-mria-1024.webp 1024w',
					width: 1024,
					height: 1536,
					alt: 'Годинник «Серце Мрії»'
				}
			]
		},
		{
			id: 'kniga-shevshenko',
			title: 'Нагорода до конкурсу Шевченка',
			category: 'Нагороди',
			description:
				'Памʼятна нагорода для учасників конкурсу — книга з рельєфним тисненням та іменним оформленням.',
			images: [
				{
					src: '/portfolio-img/kniga-shevshenko-1024.webp',
					srcset:
						'/portfolio-img/kniga-shevshenko-640.webp 640w, /portfolio-img/kniga-shevshenko-1024.webp 1024w',
					width: 1024,
					height: 1536,
					alt: 'Нагорода до конкурсу Шевченка'
				}
			]
		}
	];

	let activeViews = $state<Record<string, number>>({});

	function viewIndex(project: IProject) {
		return activeViews[project.id] ?? 0;
	}

	function setView(projectId: string, index: number) {
		activeViews = { ...activeViews, [projectId]: index };
	}
</script>

<svelte:head>
	<title>SealTech3D - Портфоліо</title>

	<meta
		name="description"
		content="Портфоліо SealTech3D: памʼятні нагороди, статуетки, декор та вироби на замовлення, надруковані на 3D-принтері."
	/>

	<meta property="og:title" content="SealTech3D - Портфоліо" />
	<meta
		property="og:description"
		content="Памʼятні нагороди, статуетки, декор та вироби на замовлення, надруковані на 3D-принтері."
	/>
	<meta property="og:url" content="/portfolio" />

	<meta name="twitter:title" content="SealTech3D - Портфоліо" />
	<meta
		name="twitter:description"
		content="Памʼятні нагороди, статуетки, декор та вироби на замовлення, надруковані на 3D-принтері."
	/>
</svelte:head>

<section class="portfolio">
	<div class="container">
		<div class="portfolio-hero pt-35 md:pt-60">
			<span class="main-section-label"> Портфоліо </span>

			<h1 class="portfolio-title">НАШІ РОБОТИ</h1>

			<p class="head">
				Від ідеї до готового виробу. Тут ви можете побачити проекти, які ми допомогли втілити в
				життя. Ваша ідея може бути слідуюча
			</p>
		</div>

		<div class="portfolio-grid">
			{#each projects as project, projectIndex (project.id)}
				<article class="project-card">
					<div class="project-image">
						<img
							src={project.images[viewIndex(project)].src}
							srcset={project.images[viewIndex(project)].srcset}
							sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
							width={project.images[viewIndex(project)].width}
							height={project.images[viewIndex(project)].height}
							alt={project.images[viewIndex(project)].alt}
							loading={projectIndex === 0 ? 'eager' : 'lazy'}
							decoding="async"
						/>

						{#if project.images.length > 1}
							<div class="view-switcher">
								{#each project.images as image, imageIndex (image.src)}
									<button
										type="button"
										class="view-dot"
										class:active={viewIndex(project) === imageIndex}
										aria-label={image.alt}
										aria-pressed={viewIndex(project) === imageIndex}
										onclick={() => setView(project.id, imageIndex)}
									></button>
								{/each}
							</div>
						{/if}
					</div>

					<div class="project-info">
						<div class="project-meta">
							<span class="project-number">
								{String(projectIndex + 1).padStart(2, '0')}
							</span>

							<span class="project-category">{project.category}</span>
						</div>

						<h2 class="project-title">{project.title}</h2>

						<p class="project-desc">{project.description}</p>
					</div>
				</article>
			{/each}
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

	.portfolio-title {
		font-size: clamp(2.5rem, 9vw, 5rem);
		line-height: 1;
		margin-bottom: 2rem;
		color: var(--text);
	}

	.portfolio-grid {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 1fr;
		margin-bottom: 3rem;

		@media (min-width: 640px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: 1024px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.project-card {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background: var(--bg2);
		border: 1px solid var(--border);
		border-radius: 12px;
		transition:
			border-color 300ms ease,
			transform 300ms ease,
			box-shadow 300ms ease;

		/* green accent bar slides down on hover */
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 3px;
			height: 0;
			background: var(--accent-green);
			z-index: 3;
			transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		}

		@media (hover: hover) {
			&:hover {
				border-color: var(--accent-green);
				transform: translateY(-6px);
				box-shadow: 0 14px 32px color-mix(in srgb, var(--black) 55%, transparent);

				&::before {
					height: 100%;
				}

				.project-image img {
					transform: scale(1.05);
				}
			}
		}
	}

	.project-image {
		position: relative;
		aspect-ratio: 4 / 5;
		overflow: hidden;
		background: var(--bg3);

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			padding: 1.25rem;
			transition: transform 500ms ease;
		}

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(
				to bottom,
				transparent 55%,
				color-mix(in srgb, var(--bg-body) 60%, transparent)
			);
			pointer-events: none;
		}
	}

	.view-switcher {
		position: absolute;
		right: 12px;
		bottom: 12px;
		z-index: 4;
		display: flex;
		gap: 6px;
	}

	.view-dot {
		width: 9px;
		height: 9px;
		padding: 0;
		border: 1px solid var(--border);
		border-radius: 50%;
		background: color-mix(in srgb, var(--white) 35%, transparent);
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			transform 0.3s ease;

		&.active {
			background: var(--accent-green);
			transform: scale(1.2);
		}

		@media (hover: hover) {
			&:hover {
				background: var(--accent-orange);
			}
		}
	}

	.project-info {
		padding: 1.25rem;
		border-top: 1px solid var(--border);
	}

	.project-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-weight: 600;
	}

	.project-number {
		color: var(--accent-green);
	}

	.project-category {
		color: var(--accent-orange);
	}

	.project-title {
		margin: 0 0 0.5rem;
		font-family: var(--font-display);
		font-size: clamp(1.25rem, 3vw, 1.6rem);
		line-height: 1.1;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--text);
	}

	.project-desc {
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--text2);
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
