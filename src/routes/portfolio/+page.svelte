<script lang="ts">
	import Projects3d from '#lib/components/portfolio/3d.svelte';
	import ProjectsIt from '#lib/components/portfolio/It.svelte';
	import { projects3d, projectsIt } from '#lib/components/portfolio/data.js';

	let activeTab = $state<'3d' | 'it'>('3d');

	const tabs: { id: '3d' | 'it'; label: string }[] = [
		{ id: '3d', label: '3D-роботи' },
		{ id: 'it', label: 'IT-розробка' }
	];
</script>

<svelte:head>
	<title>SealTech3D - Портфоліо</title>

	<meta
		name="description"
		content="Портфоліо SealTech3D: памʼятні нагороди, статуетки, декор, вироби на замовлення з 3D-принтера, а також розроблені нами сайти."
	/>

	<meta property="og:title" content="SealTech3D - Портфоліо" />
	<meta
		property="og:description"
		content="Памʼятні нагороди, статуетки, декор, вироби на замовлення та розробка сайтів."
	/>
	<meta property="og:url" content="/portfolio" />

	<meta name="twitter:title" content="SealTech3D - Портфоліо" />
	<meta
		name="twitter:description"
		content="Памʼятні нагороди, статуетки, декор та розробка сайтів."
	/>
</svelte:head>

<section class="portfolio">
	<div class="container">
		<div class="portfolio-hero pt-35 md:pt-60">
			<span class="main-section-label"> Портфоліо </span>

			<h1 class="portfolio-title">НАШІ РОБОТИ</h1>

			<p class="head">
				Від ідеї до готового результату. Тут ви можете побачити проекти, які ми допомогли втілити в
				життя. Ваша ідея може бути наступною
			</p>
		</div>

		<div class="portfolio-tabs" role="tablist" aria-label="Тип робіт">
			{#each tabs as tab (tab.id)}
				<button
					type="button"
					class="portfolio-tab"
					class:active={activeTab === tab.id}
					role="tab"
					aria-selected={activeTab === tab.id}
					onclick={() => (activeTab = tab.id)}
				>
					{tab.label}
				</button>
			{/each}
		</div>

		{#if activeTab === '3d'}
			<Projects3d projects={projects3d} />
		{:else}
			<ProjectsIt projects={projectsIt} />
		{/if}

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

	.portfolio-tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 2.5rem;
	}

	.portfolio-tab {
		padding: 0.7rem 1.4rem;
		font-weight: 600;
		font-size: 0.85rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text2);
		background: var(--bg2);
		border: 1px solid var(--border);
		border-radius: 8px;
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			color 0.3s ease,
			border-color 0.3s ease;

		&.active {
			background: var(--accent-green);
			color: #111;
			border-color: var(--accent-green);
		}

		@media (hover: hover) {
			&:hover:not(.active) {
				border-color: var(--accent-green);
				color: var(--text);
			}
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
