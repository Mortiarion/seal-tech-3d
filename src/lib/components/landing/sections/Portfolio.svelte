<section class="portfolio">
	<div class="portfolio-inner">
		<!-- LEFT: text block -->
		<div class="portfolio-left">
			<div class="portfolio-label">Портфоліо</div>

			<h2 class="portfolio-title">НАШІ<br />РОБОТИ</h2>

			<p class="portfolio-desc">
				Ми пишаємося кожним проектом, який ми реалізували, і раді поділитися деякими з них з вами.
			</p>

			<a href="/portfolio" class="portfolio-link">
				<span>Переглянути все</span>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
					<path
						d="M3 8h10M9 4l4 4-4 4"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		</div>

		<!-- RIGHT: 4-image collage -->
		<div class="portfolio-collage">
			<!-- 01: tall vertical center -->
			<div class="portfolio-item pi-center">
				<div class="portfolio-img-wrap">
					<img src="project1.jpg" alt="Project 1" loading="lazy" />
					<div class="portfolio-img-placeholder">01</div>
				</div>
				<div class="portfolio-item-label">
					<span class="item-num">01</span>
					<span class="item-name">Назва проекту 1</span>
					<span class="item-arrow">↗</span>
				</div>
			</div>

			<!-- 02: square left, vertically centered -->
			<div class="portfolio-item pi-left">
				<div class="portfolio-img-wrap">
					<img src="project2.jpg" alt="Project 2" loading="lazy" />
					<div class="portfolio-img-placeholder">02</div>
				</div>
				<div class="portfolio-item-label">
					<span class="item-num">02</span>
					<span class="item-name">Назва проекту 2</span>
					<span class="item-arrow">↗</span>
				</div>
			</div>

			<!-- 03: right top -->
			<div class="portfolio-item pi-right-top">
				<div class="portfolio-img-wrap">
					<img src="project3.jpg" alt="Project 3" loading="lazy" />
					<div class="portfolio-img-placeholder">03</div>
				</div>
				<div class="portfolio-item-label">
					<span class="item-num">03</span>
					<span class="item-name">Назва проекту 3</span>
					<span class="item-arrow">↗</span>
				</div>
			</div>

			<!-- 04: right bottom, overlaps 03 and center -->
			<div class="portfolio-item pi-right-bottom">
				<div class="portfolio-img-wrap">
					<img src="project4.jpg" alt="Project 4" loading="lazy" />
					<div class="portfolio-img-placeholder">04</div>
				</div>
				<div class="portfolio-item-label">
					<span class="item-num">04</span>
					<span class="item-name">Назва проекту 4</span>
					<span class="item-arrow">↗</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.portfolio {
		background: var(--black);
		min-height: 100svh;
		display: flex;
		align-items: center;
		padding: 6rem 3rem;
		position: relative;
		overflow: hidden;
		border-top: 1px solid var(--border);
	}

	.portfolio::before {
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

	.portfolio::after {
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
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 5rem;
		align-items: center;
	}

	/* ── LEFT ── */
	.portfolio-left {
		display: flex;
		flex-direction: column;
	}

	.portfolio-label {
		font-family: var(--font-body);
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--accent);
		display: flex;
		align-items: center;
		gap: 0.7rem;
		margin-bottom: 1.5rem;
	}

	.portfolio-label::before {
		content: '';
		display: inline-block;
		width: 20px;
		height: 1px;
		background: var(--accent);
	}

	.portfolio-title {
		font-family: var(--font-display);
		font-size: clamp(3.5rem, 6vw, 6rem);
		line-height: 0.92;
		letter-spacing: 0.01em;
		color: var(--white);
		margin-bottom: 2rem;
	}

	.portfolio-desc {
		font-family: var(--font-body);
		font-size: 0.9rem;
		line-height: 1.75;
		color: var(--gray);
		font-weight: 300;
		margin-bottom: 2.5rem;
	}

	.portfolio-link {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		font-family: var(--font-body);
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--black);
		background: var(--accent);
		text-decoration: none;
		padding: 0.9rem 1.8rem;
		width: fit-content;
		transition:
			background 0.2s,
			color 0.2s,
			gap 0.2s;
	}

	.portfolio-link:hover {
		background: var(--white);
		gap: 1.1rem;
	}

	/* ── COLLAGE ── */
	/*
    Reference layout (approximate):
    ┌────────────┬──────────┬──────────────┐
    │            │  tall    │  03 top-right│
    │ 02 left    │  center  ├──────────────┤
    │  square    │   01     │  04 bottom   │
    │            │          │  (overlaps)  │
    └────────────┴──────────┴──────────────┘
  */
	.portfolio-collage {
		position: relative;
		height: 520px;
	}

	.portfolio-item {
		position: absolute;
		background: var(--mid);
		cursor: pointer;
		display: flex;
		flex-direction: column;
		transition:
			transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
			box-shadow 0.35s;
	}

	.portfolio-item:hover {
		z-index: 10 !important;
		transform: scale(1.04);
		box-shadow: 0 20px 56px rgba(0, 0, 0, 0.75);
	}

	/* 01 — tall portrait, center, full height */
	.pi-center {
		left: 28%;
		top: 0;
		width: 26%;
		height: 100%;
		z-index: 1;
	}

	/* 02 — square, left side, vertically centered */
	.pi-left {
		left: 0;
		top: 20%;
		width: 32%;
		height: 52%;
		z-index: 2;
        border: 1px solid var(--border);
	}

	/* 03 — right column, upper half */
	.pi-right-top {
		right: 12%;
		top: 10%;
		width: 38%;
		height: 47%;
		z-index: 3;
        border: 1px solid var(--border);

	}

	/* 04 — right column, lower half, shifted left to overlap center */
	.pi-right-bottom {
		right: 20%;
		bottom: 10%;
		width: 22%;
		height: 48%;
		z-index: 4;
		/* decorative offset border like reference */
		outline: 2px solid rgba(255, 255, 255, 0.07);
		outline-offset: 7px;
        border: 1px solid var(--border);

	}

	/* image fills space above label */
	.portfolio-img-wrap {
		position: relative;
		flex: 1;
		min-height: 0;
		overflow: hidden;
	}

	.portfolio-img-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		position: relative;
		z-index: 1;
		transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.portfolio-item:hover img {
		transform: scale(1.07);
	}

	.portfolio-img-placeholder {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-display);
		font-size: 4.5rem;
		color: #1e1e1e;
		letter-spacing: 0.05em;
		z-index: 0;
		transition: color 0.3s;
	}

	.portfolio-item:hover .portfolio-img-placeholder {
		color: #272727;
	}

	.portfolio-img-wrap::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(10, 10, 10, 0.78) 0%, transparent 55%);
		z-index: 2;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.portfolio-item:hover .portfolio-img-wrap::after {
		opacity: 1;
	}

	/* green accent bar slides down on hover */
	.portfolio-item::before {
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

	.portfolio-item:hover::before {
		height: 100%;
	}

	.portfolio-item-label {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		padding: 0.65rem 0.9rem;
		background: var(--mid);
		border-top: 1px solid var(--border);
		position: relative;
		z-index: 3;
		flex-shrink: 0;
		transition: background 0.2s;
	}

	.portfolio-item:hover .portfolio-item-label {
		background: #1c1c1c;
	}

	.item-num {
		font-family: var(--font-display);
		font-size: 0.82rem;
		color: var(--accent);
		letter-spacing: 0.08em;
		flex-shrink: 0;
	}

	.item-name {
		font-family: var(--font-body);
		font-size: 0.75rem;
		font-weight: 400;
		color: var(--white);
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.item-arrow {
		font-size: 0.8rem;
		color: var(--gray);
		flex-shrink: 0;
		transition:
			transform 0.2s,
			color 0.2s;
	}

	.portfolio-item:hover .item-arrow {
		transform: translateX(3px) translateY(-3px);
		color: var(--accent);
	}
</style>
