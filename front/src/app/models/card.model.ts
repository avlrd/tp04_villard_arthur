export type Card = {
	name: string;
	number: string;
	expiryDate: CardDate;
	cvv: string;
}

export type CardDate = {
	year: number;
	month: number;
}