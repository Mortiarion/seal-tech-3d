<script lang="ts">
	import Hero from '$lib/components/landing/sections/Hero.svelte';
	import About from '$lib/components/landing/sections/About.svelte';
	import Services from '$lib/components/landing/sections/Services.svelte';
	import Contact from '$lib/components/landing/sections/Contact.svelte';
	import Portfolio from '$lib/components/landing/sections/Portfolio.svelte';
</script>

<svelte:head>
	<title>
		Seal Tech 3D - Студія 3D-друку
	</title>
</svelte:head>

<main>
	<Hero />

	<About />

	<Services />

	<Portfolio />

	<Contact />
</main>
