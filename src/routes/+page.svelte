<script lang="ts">
	import Header from '$lib/components/landing/sections/Header.svelte';
	import Hero from '$lib/components/landing/sections/Hero.svelte';
	import About from '$lib/components/landing/sections/About.svelte';
	import Services from '$lib/components/landing/sections/Services.svelte';
	import Contact from '$lib/components/landing/sections/Contact.svelte';
	import Portfolio from '$lib/components/landing/sections/Portfolio.svelte';
	import Footer from '$lib/components/landing/sections/Footer.svelte';
</script>

<svelte:head>
	<title>
		Seal Tech 3D - Студія 3D-друку
	</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />

<main>
	<Hero />

	<About />

	<Services />

	<Portfolio />

	<Contact />
</main>

<Footer />
