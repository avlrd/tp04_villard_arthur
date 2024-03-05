export type Product = {
	name: string;
	brand: string;
	category: {
		main: string;
		sub: string;
	};
	gender: string;
	price: number;
	color: Array<string>;
	stock: Array<ProductStock>;
}

export type ProductStock = {
	size: string;
	quantity: number;
}