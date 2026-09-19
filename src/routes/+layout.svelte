<script lang="ts">
	import Footer from '$lib/components/landing/sections/Footer.svelte';
	import Header from '$lib/components/landing/sections/Header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/logo.png" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex flex-col min-h-dvh">
	<Header />

	<main class="flex-1 overflow-hidden">
		
		{@render children()}
		
	</main>
	
	<Footer />
</div>
