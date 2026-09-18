<script lang="ts">
	import { ERoutesNames } from "$lib/components/routing-helpers";
</script>

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

<style lang='postcss'>
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
