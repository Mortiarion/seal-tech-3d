<script lang="ts">
	import Hero from '$lib/components/landing/sections/Hero.svelte';
	import About from '$lib/components/landing/sections/About.svelte';
	import Portfolio from '$lib/components/landing/sections/Portfolio.svelte';
	import Contact from '$lib/components/landing/sections/Contacts.svelte';
	import Procces from '$lib/components/landing/sections/Procces.svelte';
</script>

<svelte:head>
	<title>Seal Tech 3D - Студія 3D-друку</title>

	<meta
		name="description"
		content="SealTech3D — студія 3D-друку. Друкуємо на замовлення: подарунки, декор, сувеніри, функціональні деталі та прототипи. Від вашої ідеї до готового виробу."
	/>

	<meta property="og:title" content="Seal Tech 3D - Студія 3D-друку" />
	<meta
		property="og:description"
		content="Друкуємо на замовлення: подарунки, декор, сувеніри, функціональні деталі та прототипи. Від вашої ідеї до готового виробу."
	/>
	<meta property="og:url" content="/" />

	<meta name="twitter:title" content="Seal Tech 3D - Студія 3D-друку" />
	<meta
		name="twitter:description"
		content="Друкуємо на замовлення: подарунки, декор, сувеніри, функціональні деталі та прототипи."
	/>
</svelte:head>

<Hero />

<About />

<Procces />

<Portfolio />

<Contact />
