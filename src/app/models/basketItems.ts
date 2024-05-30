import { IProduct } from './products';

export interface BasketItem extends IProduct {
    totalSum:number;
    quantity: number;
}