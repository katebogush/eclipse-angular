import { Injectable } from '@angular/core';
import { IProduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  private basketProduct:IProduct[] = [];


}
