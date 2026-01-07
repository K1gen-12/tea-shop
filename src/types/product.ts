export type Category = 'sencha' | 'gyokuro' | 'matcha' | 'tool';
export type StockStatus = 'in_stock' | 'out_of_stock' | 'limited';

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: Category;
    tags: string[];
    taste_profile: {
        sweetness: number; // 1-5
        bitterness: number;
        umami: number;
        fragrance: number;
    };
    images: string[];
    stock_status: StockStatus;
}
