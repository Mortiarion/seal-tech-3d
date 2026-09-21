<div class=" flex items-center gap-5">
	<a href="/portfolio" title="Перейти до портфоліо"> Портфоліо </a>

	<a href="/#contacts" title="Перейти до секції" aria-label="Перейти до секції"> Контакти </a>
</div>

<style lang="postcss">
	div {
		a {
			letter-spacing: 0.12rem;
			text-transform: uppercase;
			position: relative;
			font-size: clamp(0.75rem, 3vw, 1.5rem);

			&::after {
				content: '';
				position: absolute;
				bottom: -2px;
				left: 0;
				width: 0;
				height: 1px;
				background-color: var(--accent-green);
				transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
			}

			&:hover::after {
				width: 100%;
			}
		}
	}
</style>
