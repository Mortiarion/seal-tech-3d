<script lang="ts">
	import EmailIcon from '$lib/components/icons/EmailIcon.svelte';
	import PhoneIcon from '$lib/components/icons/PhoneIcon.svelte';
	import TelegramIcon from '$lib/components/icons/TelegramIcon.svelte';
</script>

<section class="contacts" id="contacts">
	<div class="container grid gap-20 lg:grid-cols-2">
		<div class="pt-10">
			<span class="main-section-label"> ЗВ'ЯЖІТЬСЯ З НАМИ </span>

			<p>
				Розкажіть про ваш проект — і ми допоможемо втілити вашу ідею в життя. Без зайвих питань, з
				особистим підходом.
			</p>

			<div class="contact-links">
				<a
					href="tel:+380668038198"
					class="contact-link"
					title="Розкажіть про ваш проект"
					aria-label="Розкажіть про ваш проект"
				>
					<div class="contact-link-inner truncate">
						<span class="contact-icon">
							<PhoneIcon />
						</span>
						Телефон
						<i> +380668038198 </i>
					</div>

					<span class="contact-arrow"> ↗ </span>
				</a>

				<a
					href="https://t.me/SealTech3D"
					class="contact-link"
					target="_blank"
					rel="noopener"
					title="Напишіть про ваш проект"
					aria-label="Напишіть про ваш проект"
				>
					<div class="contact-link-inner truncate">
						<span class="contact-icon">
							<TelegramIcon />
						</span>
						Telegram
						<i> @SealTech3D </i>
					</div>

					<span class="contact-arrow"> ↗ </span>
				</a>

				<a href="mailto:sealtech3d@gmail.com" class="contact-link" title="Можна і так))">
					<div class="contact-link-inner truncate">
						<span class="contact-icon">
							<EmailIcon />
						</span>

						<i> sealtech3d@gmail.com </i>
					</div>

					<span class="contact-arrow"> ↗ </span>
				</a>
			</div>
		</div>

		<a href="/" class="flex justify-center" title="На верх">
			<img src="/logo.png" width="440" loading="lazy" alt="logo" />
		</a>
	</div>
</section>

<style lang="postcss">
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
		font-size: 0.6rem;
		font-weight: 600;
		letter-spacing: 0.2em;
		text-transform: uppercase;

		&:hover {
			background: var(--green);
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
