<script lang='ts'>
	import { ERoutesNames } from "../../../../routes/routing-helpers";
</script>

<section class="contact" id="contact">
	<div>
		<h2>
			ЗВ'ЯЖІТЬСЯ З НАМИ
		</h2>

		<p>
			Розкажіть про ваш проект — і ми допоможемо втілити вашу ідею в життя. 
			Без зайвих питань, з особистим підходом.
		</p>

		
		<div class="contact-links">
			

			<a href="tel:+380668038198" class="contact-link" title="">
				<div class="contact-link-inner">
					<span class="contact-icon">
						☎ 
					</span>
					Телефон
					<i>
						+380668038198
					</i>
				</div>

				<span class="contact-arrow">
					↗
				</span>

			</a>

			<a href="https://t.me/SealTech3D" class="contact-link" target="_blank" rel="noopener">
				<div class="contact-link-inner">
					<span class="contact-icon">
						✈
					</span>
					Telegram 
					<i>
						@SealTech3D
					</i>
				</div>

				<span class="contact-arrow">
					↗
				</span>
			</a>

			<a href="mailto:sealtech3d@gmail.com" class="contact-link" title="">
				<div class="contact-link-inner">
					<span class="contact-icon">
						✉
					</span>

					<i>
						sealtech3d@gmail.com
					</i>
				</div>

				<span class="contact-arrow">
					↗
				</span>
			</a>
		</div>
	</div>
	
	<a href={ERoutesNames.root} class="flex justify-center" title="На верх">
		<img src="logo.png" width="440" loading="lazy" alt="logo">
	</a>
</section>

<style lang="postcss">
	.contact {
		padding: 3rem 5rem;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 6rem;
		align-items: center;
		border-top: 1px solid #222;
	}

	i {
		color: var(--orange);
	}

	p {
		color: var(--gray);
		margin-bottom: 3rem;
	}

	.contact-links {
		display: flex;
		flex-direction: column;
		gap: 1px;

	}

	.contact-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		background: var(--mid);
		transition:
			background 0.3s,
			color 0.3s;
		font-size: 0.9rem;
		font-weight: 600;
		letter-spacing: 0.2em;
		text-transform: uppercase;

		&:hover {
			background: var(--accent);
			color: var(--white);
		}
	}

	.contact-link-inner {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.contact-icon {
		width: 36px;
		height: 36px;
		border: 1px solid #333;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.9rem;
		transition: border-color 0.2s;
	}
	
	.contact-arrow {
		font-size: 1rem;
		transition: transform 0.2s;
	}

	.contact-link:hover .contact-icon {
		border-color: rgba(255, 255, 255, 0.3);
	}

	.contact-link:hover .contact-arrow {
		transform: translate(3px, -3px);
	}
	
</style>
