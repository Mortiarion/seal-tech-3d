<footer>
	<!-- <div class="footer-logo">
		<span class="logo-dot"></span>FORM3D
	</div> -->

	<span class="footer-copy mx-auto">© 2026 SealTech3D. Всі права захищені.</span>
	<!-- <nav class="footer-nav">
		<a href="/portfolio">Portfolio</a>
		<a href="#contact">Контакти</a>
	</nav> -->
</footer>

<style lang="postcss">
	/* ── FOOTER ── */
	footer {
		border-top: 1px solid #222;
		padding: 2.5rem 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--black);
	}

	.footer-logo {
		font-family: var(--font-display);
		font-size: 1.4rem;
		letter-spacing: 0.08em;
		color: var(--white);
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.footer-copy {
		font-size: 0.75rem;
		color: var(--gray);
		letter-spacing: 0.05em;
	}

	.footer-nav {
		display: flex;
		gap: 2rem;
	}

	.footer-nav a {
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--gray);
		text-decoration: none;
		transition: color 0.2s;
	}

	.footer-nav a:hover {
		color: var(--accent);
	}
</style>
