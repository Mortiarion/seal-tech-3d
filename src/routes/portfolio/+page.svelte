<script lang="ts">
  type Category = 'all' | 'proto' | 'serial' | 'custom';

  interface PortfolioItem {
    id: number;
    title: string;
    subtitle: string;
    category: Exclude<Category, 'all'>;
    material: string;
    time: string;
    color: string;
    shape: 'sphere' | 'cube' | 'ring' | 'helix' | 'gear' | 'pyramid';
  }

  const items: PortfolioItem[] = [
    { id: 1,  title: 'Корпус дрона',       subtitle: 'Аерокосмічний прототип',    category: 'proto',  material: 'PETG',     time: '36г',  color: '#ff4d1c', shape: 'cube'    },
    { id: 2,  title: 'Кріплення',          subtitle: 'Серія 200шт',               category: 'serial', material: 'ABS',      time: '48г',  color: '#c8ff00', shape: 'gear'    },
    { id: 3,  title: 'Статуетка лева',     subtitle: 'Корпоративний подарунок',   category: 'custom', material: 'PLA Silk', time: '18г',  color: '#00d4ff', shape: 'sphere'  },
    { id: 4,  title: 'Робот-рука',         subtitle: 'Навчальний прототип',       category: 'proto',  material: 'TPU',      time: '72г',  color: '#ff4d1c', shape: 'helix'   },
    { id: 5,  title: 'Колеса RC',          subtitle: 'Тираж 500шт',              category: 'serial', material: 'ABS',      time: '5д',   color: '#c8ff00', shape: 'ring'    },
    { id: 6,  title: 'Cosplay шолом',      subtitle: 'Custom замовлення',        category: 'custom', material: 'PLA+',     time: '60г',  color: '#00d4ff', shape: 'pyramid' },
    { id: 7,  title: 'Корпус датчика',     subtitle: 'IoT пристрій',             category: 'proto',  material: 'PETG',     time: '24г',  color: '#ff4d1c', shape: 'cube'    },
    { id: 8,  title: 'Тримач плат',        subtitle: 'Серія 100шт',              category: 'serial', material: 'ABS',      time: '30г',  color: '#c8ff00', shape: 'gear'    },
    { id: 9,  title: 'Органайзер',         subtitle: 'Домашній декор',           category: 'custom', material: 'PLA',      time: '12г',  color: '#00d4ff', shape: 'sphere'  },
  ];

  let active: Category = $state('all');

  const filtered = $derived(active === 'all' ? items : items.filter(i => i.category === active));

  const cats: { key: Category; label: string }[] = [
    { key: 'all',    label: 'Всі роботи' },
    { key: 'proto',  label: 'Прототипи'  },
    { key: 'serial', label: 'Серійний'   },
    { key: 'custom', label: 'Custom'     },
  ];

  function setActive(k: Category) { active = k; }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
</svelte:head>

<style>
  /* :global(*) { margin: 0; padding: 0; box-sizing: border-box; } */

  /* :global(:root) {
    --black:  #0a0a0a;
    --white:  #f5f2ee;
    --accent: #53a600;
    --lime:   #c8ff00;
    --cyan:   #00d4ff;
    --mid:    #141414;
    --gray:   #6b6864;
    --border: #1e1e1e;
    --font-d: 'Bebas Neue', sans-serif;
    --font-b: 'DM Sans', sans-serif;
  } */

  /* :global(body) {
    background: var(--black);
    color: var(--white);
    font-family: var(--font-b);
    overflow-x: hidden;
  } */

  /* ── HEADER ── */
  header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    border-bottom: 1px solid var(--border);
    background: rgba(10,10,10,.85);
    backdrop-filter: blur(12px);
  }

  nav {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 3rem;
  }

  .logo {
    font-family: var(--font-d);
    font-size: 1.5rem;
    letter-spacing: 0.08em;
    color: var(--white);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--accent);
    display: inline-block;
  }

  .nav-links { display: flex; gap: 2.5rem; }

  nav a:not(.logo) {
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--gray);
    text-decoration: none;
    transition: color .2s;
  }

  nav a:not(.logo):hover,
  nav a:not(.logo).active-nav { color: var(--white); }

  /* ── PAGE HERO ── */
  .page-hero {
    padding: 10rem 3rem 5rem;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid var(--border);
  }

  .page-hero h1 {
    font-family: var(--font-d);
    font-size: clamp(4rem, 9vw, 9rem);
    line-height: .9;
    letter-spacing: -.01em;
  }

  .page-hero h1 em {
    font-style: normal;
    color: var(--accent);
  }

  .page-hero-meta {
    text-align: right;
  }

  .page-hero-meta .count {
    font-family: var(--font-d);
    font-size: 3.5rem;
    line-height: 1;
    color: var(--gray);
  }

  .page-hero-meta .count strong { color: var(--white); }

  .page-hero-meta p {
    font-size: .8rem;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--gray);
    margin-top: .5rem;
  }

  /* ── FILTERS ── */
  .filters-bar {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 3rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    border-bottom: 1px solid var(--border);
  }

  .filter-btn {
    font-family: var(--font-b);
    font-size: .75rem;
    font-weight: 500;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--gray);
    background: transparent;
    border: 1px solid var(--border);
    padding: .6rem 1.4rem;
    cursor: pointer;
    transition: all .2s;
  }

  .filter-btn:hover {
    border-color: #333;
    color: var(--white);
  }

  .filter-btn.active {
    background: var(--white);
    color: var(--black);
    border-color: var(--white);
  }

  .filter-sep {
    flex: 1;
  }

  .filter-total {
    font-size: .75rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--gray);
  }

  /* ── GRID ── */
  .portfolio-grid {
    max-width: 1400px;
    margin: 0 auto;
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }

  /* wide card every 7th */
  .portfolio-card:nth-child(7n+1) {
    grid-column: span 2;
  }

  .portfolio-card {
    position: relative;
    background: var(--mid);
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 4/3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  /* SVG visual area */
  .card-visual {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .card-visual svg {
    width: 55%;
    height: 55%;
    opacity: .18;
    transition: opacity .4s, transform .5s;
  }

  .portfolio-card:hover .card-visual svg {
    opacity: .38;
    transform: scale(1.08) rotate(6deg);
  }

  /* color accent bar */
  .card-accent {
    position: absolute;
    top: 0; left: 0;
    width: 3px;
    height: 0;
    transition: height .4s cubic-bezier(.4,0,.2,1);
  }

  .portfolio-card:hover .card-accent {
    height: 100%;
  }

  /* bottom info */
  .card-info {
    position: relative;
    z-index: 2;
    padding: 2rem 2rem 1.8rem;
    background: linear-gradient(to top, rgba(10,10,10,.92) 0%, transparent 100%);
    transform: translateY(4px);
    transition: transform .3s;
  }

  .portfolio-card:hover .card-info { transform: translateY(0); }

  .card-cat {
    font-size: .65rem;
    letter-spacing: .18em;
    text-transform: uppercase;
    margin-bottom: .5rem;
    font-weight: 500;
  }

  .card-title {
    font-family: var(--font-d);
    font-size: 1.6rem;
    letter-spacing: .04em;
    line-height: 1;
    color: var(--white);
    margin-bottom: .3rem;
  }

  .card-sub {
    font-size: .8rem;
    color: var(--gray);
    font-weight: 300;
  }

  .card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding-top: .8rem;
    border-top: 1px solid #2a2a2a;
    font-size: .72rem;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--gray);
    opacity: 0;
    transform: translateY(6px);
    transition: opacity .3s .05s, transform .3s .05s;
  }

  .portfolio-card:hover .card-meta {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── CTA STRIP ── */
  .cta-strip {
    margin: 0 3rem 6rem;
    max-width: calc(1400px - 6rem);
    margin-left: auto;
    margin-right: auto;
    background: var(--accent);
    padding: 4rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .cta-strip h3 {
    font-family: var(--font-d);
    font-size: clamp(2rem, 4vw, 3.5rem);
    line-height: 1;
    letter-spacing: .02em;
    color: var(--black);
  }

  .cta-strip p {
    font-size: .95rem;
    color: rgba(0,0,0,.65);
    font-weight: 300;
    max-width: 340px;
    line-height: 1.6;
    margin-top: .8rem;
  }

  .cta-strip a {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    font-size: .85rem;
    font-weight: 500;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--black);
    text-decoration: none;
    padding: 1.1rem 2.2rem;
    transition: background .2s, color .2s;
  }

  .cta-strip a:hover { background: var(--white); }

  /* ── FOOTER ── */
  footer {
    border-top: 1px solid var(--border);
    padding: 2.5rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
  }

  .footer-logo {
    font-family: var(--font-d);
    font-size: 1.3rem;
    letter-spacing: .08em;
    color: var(--white);
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .footer-copy { font-size: .72rem; color: var(--gray); }

  .footer-nav { display: flex; gap: 2rem; }
  .footer-nav a {
    font-size: .72rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--gray);
    text-decoration: none;
    transition: color .2s;
  }
  .footer-nav a:hover { color: var(--accent); }

  /* ── ANIMATIONS ── */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .portfolio-card {
    animation: fadeIn .4s ease both;
  }
</style>

<header>
  <nav>
    <a href="/" class="logo">
      <span class="logo-dot"></span>FORM3D
    </a>
    <div class="nav-links">
      <a href="/portfolio" class="active-nav">Portfolio</a>
      <a href="/#contact">Контакти</a>
    </div>
  </nav>
</header>

<main>
  <!-- PAGE HERO -->
  <div class="page-hero">
    <h1>
      НАШІ<br/>
      <em>РО</em>БОТИ
    </h1>
    <div class="page-hero-meta">
      <div class="count"><strong>{filtered.length}</strong> / {items.length}</div>
      <p>проектів у портфоліо</p>
    </div>
  </div>

  <!-- FILTER BAR -->
  <div class="filters-bar">
    {#each cats as cat (cat.key)}
      <button
        class="filter-btn"
        class:active={active === cat.key}
        onclick={() => setActive(cat.key)}
      >
        {cat.label}
      </button>
    {/each}
    <span class="filter-sep"></span>
    <span class="filter-total">{filtered.length} об'єктів</span>
  </div>

  <!-- GRID -->
  <div class="portfolio-grid">
    {#each filtered as item, i (item.id)}
      {@const delay = (i % 6) * 60}
      <article
        class="portfolio-card"
        style="animation-delay:{delay}ms"
      >
        <!-- color accent bar -->
        <div class="card-accent" style="background:{item.color}"></div>

        <!-- SVG geometric visual (placeholder for real photo) -->
        <div class="card-visual">
          {#if item.shape === 'sphere'}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="{item.color}" stroke-width="1.5"/>
              <ellipse cx="50" cy="50" rx="40" ry="16" stroke="{item.color}" stroke-width="1"/>
              <ellipse cx="50" cy="50" rx="16" ry="40" stroke="{item.color}" stroke-width="1"/>
              <circle cx="50" cy="50" r="6" fill="{item.color}" opacity=".5"/>
            </svg>
          {:else if item.shape === 'cube'}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 15 L80 30 L80 70 L50 85 L20 70 L20 30 Z" stroke="{item.color}" stroke-width="1.5"/>
              <path d="M50 15 L50 85" stroke="{item.color}" stroke-width="1"/>
              <path d="M20 30 L80 30" stroke="{item.color}" stroke-width="1"/>
              <path d="M20 70 L50 55 L80 70" stroke="{item.color}" stroke-width="1"/>
              <path d="M50 55 L50 85" stroke="{item.color}" stroke-width="1"/>
            </svg>
          {:else if item.shape === 'ring'}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="38" stroke="{item.color}" stroke-width="1.5"/>
              <circle cx="50" cy="50" r="24" stroke="{item.color}" stroke-width="1.5"/>
              <ellipse cx="50" cy="50" rx="38" ry="12" stroke="{item.color}" stroke-width="1" opacity=".5"/>
              <ellipse cx="50" cy="50" rx="24" ry="8" stroke="{item.color}" stroke-width="1" opacity=".5"/>
            </svg>
          {:else if item.shape === 'helix'}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 85 Q65 70 35 55 Q5 40 35 25 Q65 10 35 -5" stroke="{item.color}" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M65 85 Q35 70 65 55 Q95 40 65 25 Q35 10 65 -5" stroke="{item.color}" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="35" y1="55" x2="65" y2="55" stroke="{item.color}" stroke-width="1" opacity=".6"/>
              <line x1="35" y1="25" x2="65" y2="25" stroke="{item.color}" stroke-width="1" opacity=".6"/>
              <line x1="35" y1="70" x2="65" y2="70" stroke="{item.color}" stroke-width="1" opacity=".6"/>
              <line x1="35" y1="40" x2="65" y2="40" stroke="{item.color}" stroke-width="1" opacity=".6"/>
            </svg>
          {:else if item.shape === 'gear'}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="18" stroke="{item.color}" stroke-width="1.5"/>
              {#each [0,30,60,90,120,150,180,210,240,270,300,330] as angle (angle)}
                <rect
                  x="46" y="10" width="8" height="14" rx="1"
                  stroke="{item.color}" stroke-width="1"
                  transform="rotate({angle} 50 50)"
                />
              {/each}
            </svg>
          {:else if item.shape === 'pyramid'}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 12 L85 80 L15 80 Z" stroke="{item.color}" stroke-width="1.5"/>
              <path d="M50 12 L85 80" stroke="{item.color}" stroke-width="1" opacity=".5"/>
              <path d="M50 12 L15 80" stroke="{item.color}" stroke-width="1" opacity=".5"/>
              <path d="M15 80 L85 80" stroke="{item.color}" stroke-width="1"/>
              <path d="M50 12 L50 80" stroke="{item.color}" stroke-width="1" opacity=".3"/>
            </svg>
          {/if}
        </div>

        <!-- INFO -->
        <div class="card-info">
          <div class="card-cat" style="color:{item.color}">{
            item.category === 'proto'  ? '// Прототип'  :
            item.category === 'serial' ? '// Серійний'  : '// Custom'
          }</div>
          <div class="card-title">{item.title}</div>
          <div class="card-sub">{item.subtitle}</div>
          <div class="card-meta">
            <span>⬡ {item.material}</span>
            <span>⏱ {item.time}</span>
          </div>
        </div>
      </article>
    {/each}
  </div>

  <!-- CTA STRIP -->
  <div class="cta-strip">
    <div>
      <h3>МАЄ БУТИ<br/>ВАШЕ ФОТО?</h3>
      <p>Реалізуємо проект будь-якої складності — від ескізу до готового виробу.</p>
    </div>
    <a href="/#contact">Замовити проект →</a>
  </div>
</main>

<footer>
  <div class="footer-logo">
    <span class="logo-dot"></span>FORM3D
  </div>
  <span class="footer-copy">© 2025 Form3D. Всі права захищені.</span>
  <nav class="footer-nav">
    <a href="/portfolio">Portfolio</a>
    <a href="/#contact">Контакти</a>
  </nav>
</footer>