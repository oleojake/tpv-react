export interface Product {
	name: string;
	price: number;
	category: string;
	id: number;
}

export const CATEGORIES = {
	HOT_DRINKS: "hot_drinks",
	PASTRIES: "pastries",
	ALL: "all",
}

export const PRODUCTS: Product[] = [
	{ name: "Coffee with milk", price: 3.50, category: CATEGORIES.HOT_DRINKS, id: 1 },
	{ name: "Tea", price: 2.50, category: CATEGORIES.HOT_DRINKS, id: 2 },
	{ name: "Hot chocolate", price: 4.00, category: CATEGORIES.HOT_DRINKS, id: 3 },
	{ name: "Cappuccino", price: 3.00, category: CATEGORIES.HOT_DRINKS, id: 4 },
	{ name: "Espresso", price: 2.00, category: CATEGORIES.HOT_DRINKS, id: 5 },
	{ name: "Latte", price: 3.50, category: CATEGORIES.HOT_DRINKS, id: 6 },
	{ name: "Orange juice", price: 3.00, category: CATEGORIES.HOT_DRINKS, id: 7 },
	{ name: "Croissant", price: 2.00, category: CATEGORIES.PASTRIES, id: 8 },
	{ name: "Muffin", price: 2.50, category: CATEGORIES.PASTRIES, id: 9 },
	{ name: "Donut", price: 2.50, category: CATEGORIES.PASTRIES, id: 10 },
	{ name: "Bagel", price: 2.50, category: CATEGORIES.PASTRIES, id: 11 },
	{ name: "Toast", price: 2.00, category: CATEGORIES.PASTRIES, id: 12 },
	{ name: "Pancakes", price: 3.50, category: CATEGORIES.PASTRIES, id: 13 },
	{ name: "Waffles", price: 3.50, category: CATEGORIES.PASTRIES, id: 14 },
];

export const searchProductById = (id: number): Product => {
	return PRODUCTS.find((product) => product.id === id)!;
}