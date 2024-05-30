import { IProduct } from './products';

export interface BasketItem extends IProduct {
    quantity: number;
}