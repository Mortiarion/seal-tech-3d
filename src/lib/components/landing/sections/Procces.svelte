<section class="process border-bottom" id="procces">
	<div class="container py-10">
		<div class="intro">
			<span class="main-section-label">
                Як це працює
            </span>

			<h2>
                Ваша ідея — під вашим контролем
            </h2>

			<p class="subtitle">
				На кожному етапі ви бачите результат і приймаєте рішення. 
                Нічого не відбувається без
				вашої згоди.
			</p>
		</div>

		<div class="steps md:grid-cols-4">
			<div class="step">
				<div class="step-top">
					<span class="num">
                        01
                    </span>
				</div>

				<div class="step-content">
					<h3>
                        Ви розповідаєте ідею
                    </h3>

					<p>
						Опис, фото, ескіз або просто свої думки. 
                        Нам важливо зрозуміти саме ваше
						бачення.
					</p>
				</div>
			</div>

			<div class="step">
				<div class="step-top">
					<span class="num">
                        02
                    </span>
				</div>

				<div class="step-content">
					<h3>
                        Ви бачите перший варіант
                    </h3>

					<p>
						Показуємо, як ідея може виглядати. Ви вирішуєте, 
                        що залишити, а що змінити.
					</p>
				</div>
			</div>

			<div class="step">
				<div class="step-top">
					<span class="num">
                        03
                    </span>
				</div>

				<div class="step-content">
					<h3>
                        Ви затверджуєте фінальний вигляд 3D-моделі
                    </h3>

					<p>
                        Коли все відповідає вашому задуму — даєте згоду 
                        рухатися далі.
                    </p>
				</div>
			</div>

			<div class="step">
				<div class="step-top">
					<span class="num">
                        04
                    </span>
				</div>

				<div class="step-content">
					<h3>
                        Ви отримуєте готову річ
                    </h3>

					<p>
                        Фізичний об'єкт, створений за вашими рішеннями. 
                        Ідея стає реальною.
                    </p>
				</div>
			</div>
		</div>

		<a 
			href="#contacts" 
			class="btn" 
			title="Перейти до секції" 
			aria-label="Перейти до секції"
		>
			Розповісти про свою ідею
		</a>
	</div>
</section>

<style lang="postcss">
	.process {
		background: var(--bg-section-procces);
		margin: 20px;

		.intro {
			max-width: 650px;
			margin-bottom: 72px;

			h2 {
				font-size: clamp(2.2rem, 4.5vw, 3.4rem);
				line-height: 1.08;
				letter-spacing: -0.04em;
				margin: 0 0 20px;
				font-weight: 600;
			}
		
			.subtitle {
				color: var(--subtitle-section-procces);
				font-size: 1.05rem;
				line-height: 1.7;
				margin: 0;
				max-width: 580px;
			}
		}
	
		.steps {
			position: relative;
			display: grid;
			gap: 0;
			margin-bottom: 64px;

			&::before {
				content: '';
				position: absolute;
				top: 19px;
				bottom: 0;
				left: 5px;
				width: 1px;
				background: var(--border);
			}

			.step {
				position: relative;

				.step-top {
					position: relative;
					height: 40px;
					display: flex;
					align-items: center;
					
					&::before {
						content: '';
						position: absolute;
						top: 14px;
						left: 0;
						width: 11px;
						height: 11px;
						border: 2px solid var(--other-green);
						border-radius: 50%;
						background: var(--bg-section-procces);
						z-index: 1;
					}

					.num {
						position: absolute;
						left: 18px;
						top: 0;
						color: var(--other-green);
						font-size: 12px;
						letter-spacing: 1px;
						font-weight: 600;
					}
				}

				.step-content {
					padding-bottom: 60px;
					margin-left: 30px;
					h3 {
						font-size: 1.1rem;
						line-height: 1.3;
						margin: 0 0 12px;
						font-weight: 600;
						letter-spacing: -0.01em;
					}
				
					p {
						font-size: 0.92rem;
						line-height: 1.65;
						color: var(--subtitle-section-procces);
						margin: 0;
					}
				}
			}
		}
	
		.btn {
			display: flex;
			margin: 0 auto;
			width: fit-content;
			gap: 18px;
			background: var(--lime);
			color: #111;
			padding: 15px 20px 15px 24px;
			font-weight: 600;
			border-radius: 8px;
			transition:
				transform 180ms ease,
				background 180ms ease;

			&:hover {
				transform: translateY(-2px);
				background: var(--accent-green);
			}
		}
	}

	@media (min-width: 768px) {
		.process {
			.steps::before {
				bottom: auto;
				left: 0;
				right: 0;
				width: auto;
				height: 1px;
			}
		}
	}
</style>
