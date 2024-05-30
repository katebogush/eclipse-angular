import { Injectable } from '@angular/core';
import { BasketItem } from '../models/basketItems';
import { IProduct } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
 

  private basketProducts:BasketItem[] = [
    
  ];


  constructor() { 

  }

  get(){
    return this.basketProducts
  }


  set(product:IProduct): void {
    const basketItem = this.mapToBasketItem(product)
    const isProductExistInBasket = this.basketProducts.find(item=>item.id === basketItem.id)
    if(isProductExistInBasket){
      isProductExistInBasket.quantity++
    }
    else {
      this.basketProducts.push(basketItem);
    }
  }



    private mapToBasketItem(product:IProduct): BasketItem {
      const basketItem = {
        ...product, 
        quantity:1
      }
      return basketItem
    }


  removeItem(id:number): void{
    const index= this.basketProducts.findIndex(item=>item.id === id)
    this.basketProducts.splice(index, 1)
  }


}
