<script lang='ts'>
    const layers = Array.from({ length:20 }, (_, i) => i);
</script>

<div class="hero-right">
    <div class="layer-stack hidden md:flex">
        {#each layers as i (i)}
            <div class="layer"></div>
        {/each}
    </div>
</div>

<style lang='postcss'>
    .hero-right {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;

        &::after, 
        &::before {
            position: absolute;
            content: '';
            background-color: var(--mid);
        }

        &::before {
            z-index: -2;
            inset: 0;
            clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
        }

        &::after {
            content: '';
            z-index: -1;
            inset: 0 0 0 99%;
            width: 1000%;
        }

        .layer-stack {
            flex-direction: column-reverse;
            align-items: center;
            gap: 0.25rem;

            .layer {
                height: 8px;
                border-radius: 4px;
                background: linear-gradient(90deg, var(--accent-green), var(--orange));
                animation: buildUp 2.5s ease-out infinite;
                opacity: 0;

                &:nth-child(1) {
                    width: 80px;
                    animation-delay: 0.05s;
                }
                &:nth-child(2) {
                    width: 120px;
                    animation-delay: 0.1s;
                }
                &:nth-child(3) {
                    width: 160px;
                    animation-delay: 0.15s;
                }
                &:nth-child(4) {
                    width: 195px;
                    animation-delay: 0.2s;
                }
                &:nth-child(5) {
                    width: 225px;
                    animation-delay: 0.25s;
                }
                &:nth-child(6) {
                    width: 250px;
                    animation-delay: 0.3s;
                }
                &:nth-child(7) {
                    width: 268px;
                    animation-delay: 0.35s;
                }
                &:nth-child(8) {
                    width: 280px;
                    animation-delay: 0.4s;
                }
                &:nth-child(9) {
                    width: 288px;
                    animation-delay: 0.45s;
                }
                &:nth-child(10) {
                    width: 292px;
                    animation-delay: 0.5s;
                }
                &:nth-child(11) {
                    width: 292px;
                    animation-delay: 0.55s;
                }
                &:nth-child(12) {
                    width: 288px;
                    animation-delay: 0.6s;
                }
                &:nth-child(13) {
                    width: 280px;
                    animation-delay: 0.65s;
                }
                &:nth-child(14) {
                    width: 268px;
                    animation-delay: 0.7s;
                }
                &:nth-child(15) {
                    width: 250px;
                    animation-delay: 0.75s;
                }
                &:nth-child(16) {
                    width: 225px;
                    animation-delay: 0.8s;
                }
                &:nth-child(17) {
                    width: 195px;
                    animation-delay: 0.85s;
                }
                &:nth-child(18) {
                    width: 160px;
                    animation-delay: 0.9s;
                }
                &:nth-child(19) {
                    width: 120px;
                    animation-delay: 0.95s;
                }
                &:nth-child(20) {
                    width: 80px;
                    animation-delay: 1s;
                }
            }
        }
    }

    @keyframes buildUp {
		from {
			opacity: 0;
			transform: scaleX(0.5);
		}

		to {
			opacity: 1;
			transform: scaleX(1);
		}
	}
</style>
