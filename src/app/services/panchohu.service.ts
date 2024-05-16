import { Injectable } from '@angular/core';
import { IProducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class PanchohuService {

  private panchohu:IProducts[] = [
    {
      id: 3313,
      title: "Панчохи model 1",
      price: 759,
      image: "../../../assets/products-foto/panchohu.jpg"
  },
  {
      id: 3323,
      title: "Панчохи model 2",
      price: 549,
      image: "../../../assets/products-foto/panchohu.jpg"
  },
  {
      id: 3333,
      title: "Панчохи model 3",
      price: 299,
      image: "../../../assets/products-foto/panchohu.jpg"
  },
  {
      id: 3343,
      title: "Панчохи model 4",
      price: 1099,
      image: "../../../assets/products-foto/panchohu.jpg"
  },
  {
    id: 3353,
    title: "Панчохи model 5",
    price: 549,
    image: "../../../assets/products-foto/panchohu.jpg"
  },
  {
    id: 3363,
    title: "Панчохи model 6",
    price: 299,
    image: "../../../assets/products-foto/panchohu.jpg"
  },
  {
    id: 3373,
    title: "Панчохи model 7",
    price: 1099,
    image: "../../../assets/products-foto/panchohu.jpg"
  },
  {
    id: 3383,
    title: "Панчохи model 8",
    price: 549,
    image: "../../../assets/products-foto/panchohu.jpg"
  },
  {
    id: 3393,
    title: "Панчохи model 9",
    price: 299,
    image: "../../../assets/products-foto/panchohu.jpg"
  }
  ]
  
  getPanchohu(){
    return this.panchohu;
  }

  constructor() { }
}
