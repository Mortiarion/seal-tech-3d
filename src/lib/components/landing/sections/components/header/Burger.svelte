<script lang='ts'>
	import { fade } from "svelte/transition";

	import { ERoutesNames } from "$lib/components/routing-helpers";
	import { clickOutSide } from "$lib/components/clickOutSide";
    

     let isOpenBurger = $state(false);

    function toggleBurger() {
        isOpenBurger = !isOpenBurger;
    }

    function closeBurger() {
        isOpenBurger = false;
    }
</script>

{#if isOpenBurger}
    <div class="mob-nav" transition:fade use:clickOutSide={closeBurger}>
    
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

<style lang='postcss'>
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
</style>
