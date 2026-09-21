<script lang="ts">
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Header from '$lib/components/landing/sections/Header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon-48.png" sizes="48x48" />
	<link rel="icon" href="/favicon-180.png" sizes="180x180" />
	<link rel="apple-touch-icon" href="/favicon-180.png" />

	<meta name="theme-color" content="#0a0a0b" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="SealTech3D" />
	<meta property="og:image" content="/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="uk_UA" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="/og-image.jpg" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex min-h-dvh flex-col">
	<Header />

	<main class="flex-1 overflow-hidden">
		{@render children()}
	</main>

	<Footer />
</div>
