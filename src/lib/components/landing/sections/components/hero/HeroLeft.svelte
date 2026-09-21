<div class="hero-left pt-35 pb-5 md:pt-60 md:pb-10">
	<span class="main-section-label"> Студія 3D Друк </span>

	<!-- Where ideas become real  -->

	<h1>
		Де
		<span> ідеї </span>

		стають

		<span> реальними </span>
	</h1>

	<p class="hero-desc">
		Друкуємо на замовлення: від подарунків і декоративних моделей до функціональних деталей та
		прототипів.
	</p>

	<div class="hero-actions">
		<a href="/#contacts" class="btn" title="Розповісти про ідею"> Розповісти про ідею </a>

		<a href="/portfolio" class="btn ghost" title="Переглянути роботи"> Переглянути роботи </a>
	</div>
</div>

<style lang="postcss">
	.hero-left {
		h1 {
			margin: 0 0 2rem;
			font-family: var(--font-display);
			font-size: clamp(2.7rem, 7vw, 6.25rem);
			font-weight: 600;
			text-transform: uppercase;

			span {
				display: flex;

				&:nth-of-type(1) {
					color: var(--accent-green);
				}

				&:nth-of-type(2) {
					color: var(--orange);
				}
			}
		}

		.hero-desc {
			max-width: 30rem;
			margin: 0 0 2rem;
			line-height: 1.6;
			color: var(--text2);
		}

		.hero-actions {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.75rem;
		}

		.btn {
			display: inline-flex;
			align-items: center;
			padding: 0.9rem 1.5rem;
			border-radius: 8px;
			font-weight: 600;
			font-size: 0.9rem;
			letter-spacing: 0.06em;
			text-transform: uppercase;
			background: var(--accent-green);
			color: #111;
			transition:
				background-color 0.3s ease,
				transform 0.18s ease;

			@media (hover: hover) {
				&:hover {
					background: var(--orange);
					transform: translateY(-2px);
				}
			}

			&.ghost {
				background: transparent;
				color: var(--text);
				border: 1px solid var(--border);

				@media (hover: hover) {
					&:hover {
						background: transparent;
						border-color: var(--accent-green);
						color: var(--accent-green);
					}
				}
			}
		}
	}
</style>
