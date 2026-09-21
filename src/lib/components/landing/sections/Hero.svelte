<script lang="ts">
	import HeroLeft from './components/hero/HeroLeft.svelte';
	import HeroRight from './components/hero/HeroRight.svelte';
</script>

<section class="hero border-bottom">
	<div class="container">
		<div class="grid md:grid-cols-2">
			<HeroLeft />

			<HeroRight />
		</div>
	</div>
</section>
