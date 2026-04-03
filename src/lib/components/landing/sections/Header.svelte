<script lang='ts'>
	import { ERoutesNames } from "../../../../routes/routing-helpers";
</script>

<header class="fixed top-0 right-0 left-0 z-50 py-5">
	<nav class="flex justify-between px-20">
		<a href={ERoutesNames.root} title="Головна">
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
    a {
        opacity: 0.75;
        transition: opacity 0.2s;

        &:hover {
            opacity: 1;
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
