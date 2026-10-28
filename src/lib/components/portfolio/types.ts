export interface IProjectImage {
	src: string;
	srcset: string;
	width: number;
	height: number;
	alt: string;
}

export interface IProject {
	id: string;
	title: string;
	category: string;
	description: string;
	images: IProjectImage[];
	url?: string;
}
