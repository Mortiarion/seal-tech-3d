import type { IProject } from './types';

export const projects3d: IProject[] = [
	{
		id: 'statue',
		title: 'Памʼятна статуетка НАПН України',
		category: 'Нагороди',
		description:
			'Статуетка до 100-річчя Інституту педагогіки НАПН України: розгорнута книга на підставці у вигляді переплетених стебел.',
		images: [
			{
				src: '/portfolio-img/statue-front-1254.webp',
				srcset:
					'/portfolio-img/statue-front-640.webp 640w, /portfolio-img/statue-front-1254.webp 1254w',
				width: 1254,
				height: 1254,
				alt: 'Статуетка, вигляд спереду'
			},
			{
				src: '/portfolio-img/statue-back-1254.webp',
				srcset:
					'/portfolio-img/statue-back-640.webp 640w, /portfolio-img/statue-back-1254.webp 1254w',
				width: 1254,
				height: 1254,
				alt: 'Статуетка, вигляд ззаду'
			}
		]
	},
	{
		id: 'heart-mria',
		title: 'Годинник з підсвіткою «Серце Мрії»',
		category: 'Декор',
		description: 'Настільний годинник з декоративною підсвіткою та індивідуальним дизайном корпусу.',
		images: [
			{
				src: '/portfolio-img/heart-mria-1024.webp',
				srcset: '/portfolio-img/heart-mria-640.webp 640w, /portfolio-img/heart-mria-1024.webp 1024w',
				width: 1024,
				height: 1536,
				alt: 'Годинник «Серце Мрії»'
			}
		]
	},
	{
		id: 'kniga-shevshenko',
		title: 'Нагорода до конкурсу Шевченка',
		category: 'Нагороди',
		description:
			'Памʼятна нагорода для учасників конкурсу — книга з рельєфним тисненням та іменним оформленням.',
		images: [
			{
				src: '/portfolio-img/kniga-shevshenko-1024.webp',
				srcset:
					'/portfolio-img/kniga-shevshenko-640.webp 640w, /portfolio-img/kniga-shevshenko-1024.webp 1024w',
				width: 1024,
				height: 1536,
				alt: 'Нагорода до конкурсу Шевченка'
			}
		]
	},
	{
		id: 'heart-moshun',
		title: 'Подарунковий брелок "Незламний Мощун"',
		category: 'Аксесуари',
		description:
			'Брелок з написом «Мощун» — теплий сувенір для своїх, гостей, волонтерів і всіх, хто серцем з Мощуном.',
		images: [
			{
				src: '/portfolio-img/heart-moshun-1024.webp',
				srcset: '/portfolio-img/heart-moshun-640.webp 640w, /portfolio-img/heart-moshun-1254.webp 1254w',
				width: 1024,
				height: 1536,
				alt: 'Незламний Мощун'
			}
		]
	},
	{
		id: 'calendar-dance',
		title: 'Вічний календар « Український танець»',
		category: 'Нагороди',
		description:
			'Настільний вічний календар з обертовими дисками: число, місяць, день тижня. Підійде як нагорода для танцювальних конкурсів, сувенір керівнику колективу або декор для дому і студії',
		images: [
			{
				src: '/portfolio-img/concurs-granpri-1024.webp',
				srcset: '/portfolio-img/concurs-granpri-640.webp 640w, /portfolio-img/concurs-granpri-1254.webp 1254w',
				width: 1024,
				height: 1536,
				alt: 'Вічний календар «Український танець»'
			},
			{
				src: '/portfolio-img/concurs-three-1024.webp',
				srcset: '/portfolio-img/concurs-three-640.webp 640w, /portfolio-img/concurs-three-1254.webp 1254w',
				width: 1024,
				height: 1536,
				alt: 'Вічний календар, вигляд з іншого боку'
			}
		]
	}
];

export const projectsIt: IProject[] = [
	{
		id: 'apollo-15',
		title: 'Сайт Lounge Bar Apollo 15',
		category: 'Лендінг',
		description:
			'Односторінковий сайт lounge bar з атмосферною космічною темою: меню, галерея, FAQ та контакти. Розроблений на SvelteKit.',
		url: 'https://svelte-kit-5-apollo-15.vercel.app',
		images: [
			{
				src: '/portfolio-img/apollo-15-1280.webp',
				srcset: '/portfolio-img/apollo-15-640.webp 640w, /portfolio-img/apollo-15-1280.webp 1280w',
				width: 1280,
				height: 1600,
				alt: 'Сайт Lounge Bar Apollo 15'
			}
		]
	},
	{
		id: 'precedent-law',
		title: 'Сайт адвокатського обʼєднання «Прецедент права»',
		category: 'Лендінг',
		description:
			'Сайт адвокатського обʼєднання: команда фахівців, каталог послуг, форма звʼязку. Розроблений на SvelteKit.',
		url: 'https://precedent-law.vercel.app',
		images: [
			{
				src: '/portfolio-img/precedent-law-1280.webp',
				srcset: '/portfolio-img/precedent-law-640.webp 640w, /portfolio-img/precedent-law-1280.webp 1280w',
				width: 1280,
				height: 1600,
				alt: 'Сайт «Прецедент права»'
			}
		]
	}
];
