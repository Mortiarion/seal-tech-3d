<section class="services py-10 px-20" id="services">
	<div class="services-header">
		<h2>
			ПОСЛУГИ
		</h2>
	</div>

	<div class="services-grid">
		<div class="service-card">
			<div class="service-num">
				01
			</div>

			<div class="service-title">
				СЕРІЙНИЙ ДРУК
			</div>

			<p class="service-desc">
				Малі та середні тиражі з однаковою якістю в кожній деталі. Гнучкі строки, конкурентні ціни.
			</p>
		</div>

		<div class="service-card">
			<div class="service-num">
				02
			</div>

			<div class="service-title">
				CUSTOM ВИРОБИ
			</div>

			<p class="service-desc">
				Декор, сувеніри, cosplay-реквізит, подарунки — допоможемо з ескізом або в створенні
				3D-файлому для друку.
			</p>
		</div>
	</div>
</section>

<style lang="postcss">
	
	.services {
		background: var(--mid);
		border-top: 1px solid #2a2a2a;
	}

	.services-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 4rem;
		border-bottom: 1px solid #333;
		padding-bottom: 2rem;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2px;
	}

	.service-card {
		background: var(--black);
		padding: 3rem 2.5rem;
		position: relative;
		overflow: hidden;
		transition: background 0.3s;
	}

	.service-card::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--orange);
		transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.service-card:hover::before {
		width: 100%;
	}

	.service-card:hover {
		background: #111;
	}

	.service-num {
		font-family: var(--font-display);
		font-size: 4rem;
		color: #222;
		line-height: 1;
		margin-bottom: 1.5rem;
		transition: color 0.3s;
	}

	.service-card:hover .service-num {
		color: var(--accent);
	}

	.service-title {
		font-family: var(--font-display);
		font-size: 1.6rem;
		letter-spacing: 0.05em;
		color: var(--white);
		margin-bottom: 1rem;
	}

	.service-desc {
		font-size: 0.9rem;
		line-height: 1.7;
		color: var(--gray);
		font-weight: 300;
	}

</style>
