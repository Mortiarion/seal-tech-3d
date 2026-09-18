<section class="process border-bottom">
	<div class="container">
		<div class="intro">
			<p class="main-section-label">
                Як це працює
            </p>

			<h2>
                Ваша ідея — під вашим контролем
            </h2>

			<p class="subtitle">
				На кожному етапі ви бачите результат і приймаєте рішення. 
                Нічого не відбувається без
				вашої згоди.
			</p>
		</div>

		<div class="steps">
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

		<div class="action">
			<a href="#contacts" class="btn">
				<span>Розповісти про свою ідею</span>
			</a>
		</div>
	</div>
</section>

<style lang="postcss">
	.process {
		background: #0f0f0f;
		color: #f0f0f0;
		margin: 120px 5%;
	}

	.intro {
		max-width: 650px;
		margin-bottom: 72px;
	}

	h2 {
		font-size: clamp(2.2rem, 4.5vw, 3.4rem);
		line-height: 1.08;
		letter-spacing: -0.04em;
		margin: 0 0 20px;
		font-weight: 600;
	}

	.subtitle {
		color: #8f8f8f;
		font-size: 1.05rem;
		line-height: 1.7;
		margin: 0;
		max-width: 580px;
	}

	.steps {
		position: relative;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0;
		margin-bottom: 64px;
	}

	.steps::before {
		content: '';
		position: absolute;
		top: 19px;
		left: 0;
		right: 0;
		height: 1px;
		background: #292929;
	}

	.step {
		position: relative;
		padding: 0 24px;
	}

	.step:first-child {
		padding-left: 0;
	}

	.step:last-child {
		padding-right: 0;
	}

	.step-top {
		position: relative;
		height: 40px;
		display: flex;
		align-items: center;
	}

	.step-top::before {
		content: '';
		position: absolute;
		top: 14px;
		left: 0;
		width: 11px;
		height: 11px;
		border: 2px solid #4ade80;
		border-radius: 50%;
		background: #0f0f0f;
		z-index: 1;
	}

	.num {
		position: absolute;
		left: 18px;
		top: 0;
		color: #4ade80;
		font-size: 12px;
		letter-spacing: 1px;
		font-weight: 600;
	}

	.step-content {
		padding-top: 28px;
		padding-right: 12px;
	}

	.step h3 {
		font-size: 1.1rem;
		line-height: 1.3;
		margin: 0 0 12px;
		font-weight: 600;
		letter-spacing: -0.01em;
	}

	.step p {
		font-size: 0.92rem;
		line-height: 1.65;
		color: #858585;
		margin: 0;
	}

	.action {
		display: flex;
		justify-content: center;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 18px;
		background: #4ade80;
		color: #111;
		padding: 15px 20px 15px 24px;
		font-weight: 600;
		text-decoration: none;
		border-radius: 8px;
		font-size: 0.95rem;
		transition:
			transform 180ms ease,
			background 180ms ease;
	}

	.btn:hover {
		transform: translateY(-2px);
		background: #6ee796;
	}

	.arrow {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: rgba(17, 17, 17, 0.12);
		font-size: 18px;
		line-height: 1;
		transition: transform 180ms ease;
	}

	.btn:hover .arrow {
		transform: translateX(3px);
	}

</style>
