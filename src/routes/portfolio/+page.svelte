<script lang="ts">
	import Arrow from '$lib/components/icons/Arrow.svelte';
	import { ERoutesNames } from '../routing-helpers';
</script>

<svelte:head>
	<title>Seal Tech 3D - Портфоліо</title>
</svelte:head>

<main>
	<section class="container mx-auto px-5 md:px-10 xl:px-20 pt-30 md:pt-56 pb-10">
		<!-- PAGE HERO -->
		<div class="page-hero">
			<h1>
				НА<span>ШІ</span>
				<br />
				<span>РО</span>БОТИ
			</h1>
	
			<div class="page-hero-meta">
				<div class="count">
					<strong> 4 </strong> / 4
				</div>
	
				<p>проектів у портфоліо</p>
			</div>
		</div>
	
		<!-- GRID -->
		<div class="portfolio-grid">
			<article class="portfolio-card">
				<!-- color accent bar -->
				<div class="card-accent" style="background:#ff4d1c"></div>
	
				<img src="/portfolio-img/heart-mria.png" alt="heart mria" />
	
				<!-- INFO -->
				<div class="card-info">
					<div class="card-cat" style="color:#ff4d1c">
						// Custom
					</div>
	
					<div class="card-title">
						Годинник з підсвіткою "Серце Мрії"
					</div>
				</div>
			</article>
	
			<article class="portfolio-card" >
				<!-- color accent bar -->
				<div class="card-accent" style="background:#73d62b"></div>
	
				<img src="/portfolio-img/heart-mria.png" alt="heart mria" />
			</article>
	
			<article class="portfolio-card" >
				<!-- color accent bar -->
				<div class="card-accent" style="background:#73d62b"></div>
	
				<img src="/portfolio-img/heart-mria.png" alt="heart mria" />
			</article>
		</div>
		<!-- GRID -->
		<div class="portfolio-grid">
			<article class="portfolio-card">
				<!-- color accent bar -->
				<div class="card-accent" style="background:#ff4d1c"></div>
	
				<img src="/portfolio-img/kniga-shevshenko.png" alt="kniga shevshenko" />
	
				<!-- INFO -->
				<div class="card-info">
					<div class="card-cat" style="color:#ff4d1c">
						// Custom
					</div>
	
					<div class="card-title">
						Нагорода до конкурсу Шевченка
					</div>
				</div>
			</article>
	
			<article class="portfolio-card" >
				<!-- color accent bar -->
				<div class="card-accent" style="background:#73d62b"></div>
	
				<img src="/portfolio-img/kniga-shevshenko.png" alt="kniga shevshenko" />
			</article>
	
			<article class="portfolio-card" >
				<!-- color accent bar -->
				<div class="card-accent" style="background:#73d62b"></div>
	
				<img src="/portfolio-img/kniga-shevshenko.png" alt="kniga shevshenko" />
			</article>
		</div>
	
		<!-- GRID -->
		<div class="portfolio-grid">
			<article class="portfolio-card">
				<!-- color accent bar -->
				<div class="card-accent" style="background:#ff4d1c"></div>
	
				<img src="/portfolio-img/basket.jpg" alt="Дизайнерска крафтова сумка" />
	
				<!-- INFO -->
				<div class="card-info">
					<div class="card-cat" style="color:#ff4d1c">
						// Custom
					</div>
	
					<div class="card-title">
						Дизайнерска крафтова сумка
					</div>
				</div>
			</article>
	
			<article class="portfolio-card" >
				<!-- color accent bar -->
				<div class="card-accent" style="background:#73d62b"></div>
	
				<img src="/portfolio-img/basket.jpg" alt="Дизайнерска крафтова сумка" />
			</article>
	
			<article class="portfolio-card" >
				<!-- color accent bar -->
				<div class="card-accent" style="background:#73d62b"></div>
	
				<img src="/portfolio-img/basket.jpg" alt="Дизайнерска крафтова сумка" />
			</article>
		</div>
	
		<!-- GRID -->
		<div class="portfolio-grid">
			<article class="portfolio-card">
				<!-- color accent bar -->
				<div class="card-accent" style="background:#ff4d1c"></div>
	
				<img src="/portfolio-img/motanka.jpg" alt="Берегиня-мотанка" />
	
				<!-- INFO -->
				<div class="card-info">
					<div class="card-cat" style="color:#ff4d1c">
						// Custom
					</div>
	
					<div class="card-title">
						Берегиня-мотанка
					</div>
				</div>
			</article>
	
			<article class="portfolio-card" >
				<!-- color accent bar -->
				<div class="card-accent" style="background:#73d62b"></div>
	
				<img src="/portfolio-img/motanka.jpg" alt="Берегиня-мотанка" />
			</article>
	
			<article class="portfolio-card" >
				<!-- color accent bar -->
				<div class="card-accent" style="background:#73d62b"></div>
	
				<img src="/portfolio-img/motanka.jpg" alt="Берегиня-мотанка" />
			</article>
		</div>
	
		<!-- CTA STRIP -->
		<div class="cta-strip">
			<div>
				<h3>
					МАЄТЕ ІДЕЮ?
					<br />
					ДАВАЙТЕ РЕАЛІЗУЄМО ЇЇ РАЗОМ!
				</h3>
	
				<p>Реалізуємо проект будь-якої складності — від ескізу до готового виробу.</p>
			</div>
	
			<a href={ERoutesNames.contact} class='main-link'> 
		  Замовити проект 
		  <span>
			<Arrow />
		  </span>
		</a>
	
		</div>
		
	</section>
</main>

<style lang="postcss">
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* ── PAGE HERO ── */
	.page-hero {
		/* padding: 10rem 1rem 5rem; */
		margin: 0 auto;
		/* display: flex; */
		/* justify-content: space-between; */
		/* align-items: flex-end; */
		border-bottom: 1px solid var(--border);

		h1 {
			font-family: var(--font-d);
			font-size: clamp(4rem, 9vw, 9rem);
			line-height: 0.9;
			letter-spacing: -0.01em;
			span:first-of-type {
				color: var(--orange);
			}
			span:last-of-type {
				color: var(--accent);
			}
		}
	}

	.page-hero-meta {
		text-align: right;

		.count {
			font-family: var(--font-d);
			font-size: 3.5rem;
			line-height: 1;
			color: var(--gray);

			& strong {
				color: var(--white);
			}
		}

		p {
			font-size: 0.8rem;
			letter-spacing: 0.12em;
			text-transform: uppercase;
			color: var(--gray);
			margin-top: 0.5rem;
		}
	}

	/* ── GRID ── */
	.portfolio-grid {
		/* max-width: 1400px; */
		/* margin: 0 auto; */
    	max-height: 1000px;
		/* padding: 3rem; */
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 2px;
		margin-bottom: 20px;
	}

	/* перша — вся ліва колонка, обидва рядки */
	.portfolio-card:nth-child(1) {
		grid-column: 1;
		grid-row: 1 / 3;
	}

	/* 2 і 3 — права колонка, по рядку */
	.portfolio-card:nth-child(2) {
		grid-column: 2;
		grid-row: 1;
	}

	.portfolio-card:nth-child(3) {
		grid-column: 2;
		grid-row: 2;
	}

	.portfolio-card {
		position: relative;
		overflow: hidden;
		cursor: pointer;
		
		height: 100%; 
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	/* color accent bar */
	.card-accent {
		position: absolute;
		top: 0;
		left: 0;
		width: 3px;
		height: 0;
		transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.portfolio-card:hover .card-accent {
		height: 100%;
	}

	/* bottom info */
	.card-info {
		position: absolute;
		width: 100%;
		z-index: 2;
		padding: 2rem 2rem 1.8rem;
		background: linear-gradient(to top, rgba(10, 10, 10, 0.92) 0%, transparent 100%);
		transform: translateY(4px);
		transition:
			transform 0.3s,
			opacity 0.3s;
		opacity: 0;
	}

	.portfolio-card:hover .card-info {
		opacity: 1;
		transform: translateY(0);
	}

	.card-cat {
		font-size: 0.65rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	.card-title {
		font-family: var(--font-display);
		font-size: 1.6rem;
		letter-spacing: 0.04em;
		line-height: 1;
		color: var(--white);
		margin-bottom: 0.3rem;
	}

	/* ── CTA STRIP ── */
	.cta-strip {
		/* margin: 0 3rem 6rem; */
		/* max-width: calc(1400px - 6rem); */
		/* margin-left: auto; */
		/* margin-right: auto; */
		background: var(--accent);
		padding: 3rem;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		/* justify-content: space-between; */
		gap: 2rem;

		h3 {
			font-family: var(--font-d);
			font-size: clamp(2rem, 4vw, 3.5rem);
			line-height: 1;
			letter-spacing: 0.02em;
			color: var(--black);
		}
	
		p {
			font-size: 0.95rem;
			color: rgba(0, 0, 0, 0.65);
			font-weight: 300;
			max-width: 340px;
			line-height: 1.6;
			margin-top: 0.8rem;
		}
	
		 a {
			flex-shrink: 0;
			display: inline-flex;
			align-items: center;
			gap: 1rem;
			font-size: 0.85rem;
			font-weight: 500;
			letter-spacing: 0.1em;
			text-transform: uppercase;
			color: var(--accent);
			background: var(--black);
			text-decoration: none;
			padding: 1.1rem 2.2rem;
			transition:
				background 0.2s,
				color 0.2s;

			&:hover {
				background: var(--white);
			}
		}
	
	}


</style>
