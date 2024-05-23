import { Injectable } from '@angular/core';
import { IProduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ActiveProductService {

  private activeProduct:IProduct | null = null;

  get(): IProduct | null {
    return this.activeProduct
  }

  set(product:IProduct): void {
    this.activeProduct = product;
  }

  clear(): void {
    this.activeProduct = null;
  } 

}
