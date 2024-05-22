import { Injectable } from '@angular/core';
import { IProduct } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class KupalnikiService {

  private kupalniki:IProduct[] = [
    {
      id: 2212,
      title: "Купальник model 1",
      price: 759,
      image: "../../../assets/products-foto/kupalnik.jpg"
  },
  {
      id: 2222,
      title: "Купальник model 2",
      price: 549,
      image: "../../../assets/products-foto/kupalnik.jpg"
  },
  {
      id: 2232,
      title: "Купальник model 3",
      price: 299,
      image: "../../../assets/products-foto/kupalnik.jpg"
  },
  {
      id: 2242,
      title: "Купальник model 4",
      price: 1099,
      image: "../../../assets/products-foto/kupalnik.jpg"
  },
  {
    id: 2252,
    title: "Купальник model 5",
    price: 549,
    image: "../../../assets/products-foto/kupalnik.jpg"
  },
  {
    id: 2262,
    title: "Купальник model 6",
    price: 299,
    image: "../../../assets/products-foto/kupalnik.jpg"
  },
  {
    id: 2272,
    title: "Купальник model 7",
    price: 1099,
    image: "../../../assets/products-foto/kupalnik.jpg"
  },
  {
    id: 2282,
    title: "Купальник model 8",
    price: 549,
    image: "../../../assets/products-foto/kupalnik.jpg"
  },
  {
    id: 2292,
    title: "Купальник model 9",
    price: 299,
    image: "../../../assets/products-foto/kupalnik.jpg"
  }
  ]
  
  getKupalniki(){
    return this.kupalniki;
  }
  
  

  constructor() { }
}
