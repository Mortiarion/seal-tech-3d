<a href="/" title="SealTech3D">
	<img
		src="/logo-360.webp"
		srcset="/logo-96.webp 96w, /logo-360.webp 360w"
		sizes="(min-width: 768px) 180px, 80px"
		width="540"
		height="540"
		alt="SealTech3D — студія 3D-друку"
	/>
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
