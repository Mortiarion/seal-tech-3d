<script lang="ts">
	import type { IProject } from './types';
	import './portfolio.css';

	let { projects = [] }: { projects: IProject[] } = $props();
</script>

<div class="portfolio-grid" role="tabpanel">
	{#each projects as project, projectIndex (project.id)}
		<article class="project-card">
			<div class="project-image">
				<img
					src={project.images[0].src}
					srcset={project.images[0].srcset}
					sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
					width={project.images[0].width}
					height={project.images[0].height}
					alt={project.images[0].alt}
					loading={projectIndex === 0 ? 'eager' : 'lazy'}
					decoding="async"
				/>
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

				{#if project.url}
					<a href={project.url} target="_blank" rel="noopener" class="project-link">
						Переглянути сайт ↗
					</a>
				{/if}
			</div>
		</article>
	{/each}
</div>
