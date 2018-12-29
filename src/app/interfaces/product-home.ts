export interface HomeProduct {
	img: string;
	// theme: string;
	title: string;
	price: string;
	description: string;
	detail: HomeroductDetail;
}

export interface HomeroductDetail {
	title: string;
	description: string;
	contents: string[];
}