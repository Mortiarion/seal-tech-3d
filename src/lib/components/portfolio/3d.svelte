<script lang="ts">
	import type { IProject } from './types';
	import './portfolio.css';

	let { projects = [] }: { projects: IProject[] } = $props();

	let activeViews = $state<Record<string, number>>({});

	function viewIndex(project: IProject) {
		return activeViews[project.id] ?? 0;
	}

	function setView(projectId: string, index: number) {
		activeViews = { ...activeViews, [projectId]: index };
	}
</script>

<div class="portfolio-grid" role="tabpanel">
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
