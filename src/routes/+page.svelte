<script lang="ts">
	import Hero from '#lib/components/landing/sections/Hero.svelte';
	import About from '#lib/components/landing/sections/About.svelte';
	import Portfolio from '#lib/components/landing/sections/Portfolio.svelte';
	import Contact from '#lib/components/landing/sections/Contacts.svelte';
	import Procces from '#lib/components/landing/sections/Procces.svelte';
</script>

<svelte:head>
	<title>Seal Tech 3D - Студія 3D-друку</title>

	<meta
		name="description"
		content="SealTech3D — студія 3D-друку та IT-розробки. Друкуємо на замовлення: подарунки, декор, сувеніри, функціональні деталі та прототипи. Розробляємо лендінги та сайти під ключ. Від вашої ідеї до готового результату."
	/>

	<meta property="og:title" content="Seal Tech 3D - Студія 3D-друку та IT-розробки" />
	<meta
		property="og:description"
		content="Друкуємо на замовлення: подарунки, декор, сувеніри, функціональні деталі та прототипи. Розробляємо лендінги та сайти. Від вашої ідеї до готового результату."
	/>
	<meta property="og:url" content="/" />

	<meta name="twitter:title" content="Seal Tech 3D - Студія 3D-друку та IT-розробки" />
	<meta
		name="twitter:description"
		content="Друкуємо на замовлення: подарунки, декор, сувеніри, функціональні деталі та прототипи. Розробляємо лендінги та сайти."
	/>
</svelte:head>

<Hero />

<About />

<Procces />

<Portfolio />

<Contact />
