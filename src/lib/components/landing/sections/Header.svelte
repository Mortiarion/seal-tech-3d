<script lang='ts'>
	import { onMount } from "svelte";
	import { ERoutesNames } from "../../../../routes/routing-helpers";

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

<header class="fixed top-0 right-0 left-0 z-50" class:scrolled>
	<nav class="flex justify-between px-20">
		<a href={ERoutesNames.root} class='logo-wrapper' title="Головна">
            <img src="logo.png" width="180" loading="lazy" alt="logo">
		</a>

		<div class="flex items-center gap-10">
			<a href="#portfolio" title='Перейти до секції'> 
                Портфоліо
            </a>

            <a href="#about" title='Перейти до секції'> 
                Про нас
            </a>

			<a href="#contact" title='Перейти до секції'> 
                Контакти
            </a>
		</div>
	</nav>
</header>

<style lang="postcss">
    header {
        padding-block: 1.25rem;
        transition: 
            padding-block 0.4s cubic-bezier(0.4, 0, 0.2, 1),
            background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow       0.35s cubic-bezier(0.4, 0, 0.2, 1);

        &.scrolled {
            padding-block: 0.5rem;
            background-color: rgba(10, 10, 10, 0.85);
		    backdrop-filter: blur(14px);
            box-shadow: 0 1px 0 var(--border);

            & .logo-wrapper img {
                width: 80px;
            }
        }
    }

    .logo-wrapper {
        opacity: 0.75;
        transition: opacity 0.2s;
        
        &:hover {
            opacity: 1;
        }
        
        img {
            width: 180px;
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
    }

    div {
        a {
            letter-spacing: 0.12rem;
            text-transform: uppercase;
            position: relative;
    
            &::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 0;
                height: 1px;
                background-color: var(--accent);
                transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
    
            &:hover::after {
                width: 100%;
            }
        }
    }

</style>
