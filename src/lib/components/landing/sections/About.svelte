<section class="about border-bottom">
	<div class="container py-10">
		<span class="main-section-label"> Про нас </span>

		<div class="mb-5 grid gap-10 md:grid-cols-3">
			<p>
				У SealTech3D ми віримо, що кожна ідея заслуговує на життя. Іноді це лише думка, ескіз або
				мрія — але з правильною технологією вона може стати реальним об’єктом.
			</p>

			<p class="col-two">
				Працюємо з інженерами, дизайнерами, стартапами та звичайними людьми, яким потрібно «<span>
					оте
				</span>, але
				<span> справжнє </span>».
			</p>

			<p>
				Від унікальних подарунків і декоративних моделей до функціональних деталей та прототипів —
				ми створюємо речі, які починаються з вашої ідеї.
			</p>
		</div>

		<p class="sub">
			Ви
			<span> уявляєте </span>
			— ми
			<span> втілюємо. </span>
		</p>
	</div>
</section>

<style lang="postcss">
	.about {
		position: relative;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background-image:
				linear-gradient(var(--border) 2px, transparent 2px),
				linear-gradient(90deg, var(--border) 2px, transparent 2px);
			background-size: 60px 60px;
			opacity: 0.35;
			pointer-events: none;
			z-index: -1;
		}

		p {
			line-height: 1.6;
			letter-spacing: 1px;

			span:first-of-type {
				color: var(--accent-green);
			}

			span:last-of-type {
				color: var(--orange);
			}
		}

		.col-two {
			span:first-of-type,
			span:last-of-type {
				font-size: 24px;
				text-transform: uppercase;
			}

			span:first-of-type {
				color: var(--orange);
			}

			span:last-of-type {
				color: var(--accent-green);
			}
		}

		.sub {
			font-size: 24px;
			text-transform: uppercase;
		}
	}
</style>
