<script lang="ts">
	import { onMount } from 'svelte';

	import Logo from './components/header/Logo.svelte';
	import Navigation from './components/header/Navigation.svelte';

	let scrolled = $state(false);
	let headerSentinel: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				scrolled = !entry.isIntersecting;
			},
			{ threshold: 0 }
		);

		if (headerSentinel) observer.observe(headerSentinel);

		return () => observer.disconnect();
	});
</script>

<!-- 1px маркер на самому верху — observer стежить за ним -->
<div id="header-sentinel" aria-hidden="true" bind:this={headerSentinel}></div>

<header class:scrolled>
	<div class="container">
		<nav class="flex justify-between">
			<Logo />

			<Navigation />
		</nav>
	</div>
</header>

<style lang="postcss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		padding-top: 1.25rem;
	}
</style>
