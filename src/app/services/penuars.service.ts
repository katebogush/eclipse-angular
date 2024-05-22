import { Injectable } from '@angular/core';
import { IProduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class PenuarsService {

  private penuars:IProduct[] = [
    {
      id: 4414,
      title: "Пеньюар model 1",
      price: 759,
      image: "../../../assets/products-foto/penuar.jpg"
  },
  {
      id: 4424,
      title: "Пеньюар model 2",
      price: 549,
      image: "../../../assets/products-foto/penuar.jpg"
  },
  {
      id: 4434,
      title: "Пеньюар model 3",
      price: 299,
      image: "../../../assets/products-foto/penuar.jpg"
  },
  {
      id: 4444,
      title: "Пеньюар model 4",
      price: 1099,
      image: "../../../assets/products-foto/penuar.jpg"
  },
  {
    id: 4454,
    title: "Пеньюар model 5",
    price: 549,
    image: "../../../assets/products-foto/penuar.jpg"
  },
  {
    id: 4464,
    title: "Пеньюар model 6",
    price: 299,
    image: "../../../assets/products-foto/penuar.jpg"
  },
  {
    id: 4474,
    title: "Пеньюар model 7",
    price: 1099,
    image: "../../../assets/products-foto/penuar.jpg"
  },
  {
    id: 4484,
    title: "Пеньюар model 8",
    price: 549,
    image: "../../../assets/products-foto/penuar.jpg"
  },
  {
    id: 4494,
    title: "Пеньюар model 9",
    price: 299,
    image: "../../../assets/products-foto/penuar.jpg"
  }
  ]
  
  getPenuars(){
    return this.penuars;
  }

  constructor() { }
}
