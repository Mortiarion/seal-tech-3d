<section class="about px-20 py-20" id="about">
	<h2 class="about-label tracking-widest uppercase mb-5">
		Про нас
	</h2>

	<div class="grid grid-cols-3 gap-10">

		<p class="mb-5">
			У SealTech3D ми віримо, що кожна ідея заслуговує на життя.
			Іноді це лише думка, ескіз або мрія — але з правильною 
			технологією вона може 
			стати реальним об’єктом.
		</p>

		<p class="f">
			Працюємо з інженерами, дизайнерами, стартапами та звичайними 
			людьми, яким потрібно 
			«<span>
				оте
			</span>, 
			але 
			<span>
				справжнє
			</span>». 

			Без зайвої бюрократії, з особистим підходом.
		</p>

		<p>
			Від унікальних подарунків і декоративних моделей до 
			функціональних деталей та прототипів — 
			ми створюємо речі, які починаються з вашої ідеї.
		</p>
	</div>

	<p class="d">

		Ви 
		<span>
			уявляєте

		</span>
			— ми
		<span>
			втілюємо.
		</span> 
	</p>
</section>

<style lang="postcss">
	.about {
		border-top: 1px solid #222;

		p {
			line-height: 1.6;
			letter-spacing: 1px;
		
			span:first-of-type {
 				color: var(--accent);
 			}

 			span:last-of-type {
 				color: var(--orange);
			}

		}

		.d {
			font-size: 24px;
			text-transform: uppercase;
		}
		
		.f {
			span:first-of-type {
				font-size: 24px;
				text-transform: uppercase;
				color: var(--orange);
			}
			
			span:last-of-type {
				 color: var(--accent);
				 font-size: 24px;
				text-transform: uppercase;
			}
		}
	}

	.about-label {
		color: var(--accent);
	}

</style>
