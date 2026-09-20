<a href="/" title="Тюляп))">
	<img src="/logo.png" loading="lazy" alt="logo" />
</a>

<style lang="postcss">
	a {
		opacity: 0.75;
		transition: opacity 0.3s;

		&:hover {
			opacity: 1;
		}

		img {
			width: 80px;
			transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
		}

		@media (width >= 48rem /* 768px */) {
			img {
				width: 180px;
			}
		}
	}
</style>
