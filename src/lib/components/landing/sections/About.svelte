<section class="about">
	<div>
		<div class="about-label">Про нас</div>
		<h2>ХТОМИ ТАКІ</h2>
		<p>
			Ми — невелика студія 3D-друку, яка вірить, що будь-яка ідея заслуговує на фізичне втілення.
			Від мікродеталей до великогабаритних прототипів — підбираємо матеріал і технологію під кожне
			завдання.
		</p>
		<p>
			Працюємо з інженерами, дизайнерами, стартапами та звичайними людьми, яким потрібно «оте, але
			справжнє». Без зайвої бюрократії, з особистим підходом.
		</p>
	</div>
	<div class="stats">
		<div class="stat">
			<div class="n">48<span>г</span></div>
			<div class="d">Середній час виготовлення</div>
		</div>
		<div class="stat">
			<div class="n">15<span>+</span></div>
			<div class="d">Видів матеріалів</div>
		</div>
		<div class="stat">
			<div class="n">0.1<span>мм</span></div>
			<div class="d">Точність шару</div>
		</div>
		<div class="stat">
			<div class="n">100<span>%</span></div>
			<div class="d">Клієнтів повертаються</div>
		</div>
	</div>
</section>

<style lang="postcss">
	/* ── ABOUT ── */
	.about {
		padding: 8rem 3rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6rem;
		align-items: center;
		background: var(--black);
		border-top: 1px solid #222;
	}

	.about-label {
		font-size: 0.7rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--accent);
		font-weight: 500;
		margin-bottom: 1.5rem;
	}

	h2 {
		font-family: var(--font-display);
		font-size: clamp(3rem, 5vw, 5.5rem);
		line-height: 0.95;
		letter-spacing: 0.01em;
		color: var(--white);
		margin-bottom: 2rem;
	}

	.about p {
		font-size: 1rem;
		line-height: 1.8;
		color: var(--gray);
		font-weight: 300;
	}

	.about p + p {
		margin-top: 1.2rem;
	}

	.stats {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2px;
	}

	.stat {
		background: var(--mid);
		padding: 2.5rem 2rem;
	}

	.stat .n {
		font-family: var(--font-display);
		font-size: 3.5rem;
		line-height: 1;
		color: var(--white);
		margin-bottom: 0.5rem;
	}

	.stat .n span {
		color: var(--accent);
	}

	.stat .d {
		font-size: 0.78rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--gray);
		font-weight: 500;
	}
</style>
