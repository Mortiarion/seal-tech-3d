<script lang='ts'>
	import { onMount } from "svelte";
	import { ERoutesNames } from "../../../../routes/routing-helpers";
	import { fade } from "svelte/transition";
	import { clickOutSide } from "$lib/components/clickOutSide";

    let scrolled = $state(false);
    let headerSentinel: HTMLElement;
    let isOpenBurger = $state(false);

    function toggleBurger() {
        isOpenBurger = !isOpenBurger;
    }

    function closeBurger() {
        isOpenBurger = false;
    }

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
    <div class="container mx-auto py-5 px-5 lg:px-10 xl:px-20">
        <nav class="flex justify-between" use:clickOutSide={closeBurger}>
            <a href={ERoutesNames.root} onclick={closeBurger} class='logo-wrapper' title="Головна">
                <img src="logo.png" loading="lazy" alt="logo">
            </a>
    
            <div class="hidden items-center gap-10 md:flex">
                <a href={ERoutesNames.about} title='Перейти до секції'> 
                    Про нас
                </a>
    
                <a href={ERoutesNames.services} title='Перейти до секції'> 
                    Послуги
                </a>
                
                <a href={ERoutesNames.portfolio} title='Перейти до секції'> 
                    Портфоліо
                </a>
    
                <a href={ERoutesNames.contact} title='Перейти до секції'> 
                    Контакти
                </a>
            </div>
    
            {#if isOpenBurger}
                <div class="mob-nav" transition:fade>
                    <a href={ERoutesNames.about} onclick={closeBurger} title='Перейти до секції'> 
                        Про нас
                    </a>
    
                    <a href={ERoutesNames.services} onclick={closeBurger} title='Перейти до секції'> 
                        Послуги
                    </a>
                    
                    <a href={ERoutesNames.portfolio} onclick={closeBurger} title='Перейти до секції'> 
                        Портфоліо
                    </a>
    
                    <a href={ERoutesNames.contact} onclick={closeBurger} title='Перейти до секції'> 
                        Контакти
                    </a>
                </div>
            {/if}
    
            <button 
                class="burger flex flex-col md:hidden" 
                title={isOpenBurger ? 'Закрити меню' : 'Відкрити меню'}  
                aria-label={isOpenBurger ? 'Закрити меню' : 'Відкрити меню'} 
                onclick={toggleBurger}
            >
                <span class="burger-line" class:rotate={isOpenBurger}></span>
                <span class="burger-line" class:rotate={isOpenBurger}></span>
                <span class="burger-line" class:rotate={isOpenBurger}></span>
            </button>
        </nav>
    </div>
</header>

<style lang="postcss">
    header {
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

        nav {
            .mob-nav {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                position: absolute;
                top: 100%;
                font-weight: bold;
                right: 6%;
                font-size: 0.8rem;
                text-align: right;
                padding: 1.5rem;
                background-color: rgba(10, 10, 10, 0.75);
                border-radius: 8px;
                z-index: 5;
                backdrop-filter: blur(14px);
                /* box-shadow: 0 1px 0 var(--border); */
            }

            .burger {
                border: 1px solid var(--accent);
                padding: 6px;
                width: 32px;
                gap: 4px;
                border-radius: 8px;
                margin: auto 0;
                cursor: pointer;
                transition: opacity 0.3s;

                &:hover {
                    opacity: 0.8;
                }

                & .burger-line {
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, var(--accent), var(--orange));
                    transition: transform 0.3s, opacity 0.3s ;

                    &.rotate {
                        &:nth-child(1) {
                            transform: rotate(46deg) translate(5px, 4px);
                        }

                        &:nth-child(2) {
                            opacity: 0;
                        }

                        &:nth-child(3) {
                            transform: rotate(-46deg) translate(4px, -4px);
                        }
                    }
                }
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
            width: 80px;
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (width >= 48rem /* 768px */) {
            img {
                width: 180px;
            }
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
