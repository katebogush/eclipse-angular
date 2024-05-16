import { Injectable } from '@angular/core';
import { IProducts } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class CorsetsService {

private corsets:IProducts[] = [
  {
    id: 1111,
    title: "Корсет model 1",
    price: 759,
    image: "../../../assets/products-foto/corset.jpg"
},
{
    id: 1121,
    title: "Корсет model 2",
    price: 549,
    image: "../../../assets/products-foto/corset.jpg"
},
{
    id: 1131,
    title: "Корсет model 3",
    price: 299,
    image: "../../../assets/products-foto/corset.jpg"
},
{
    id: 1141,
    title: "Корсет model 4",
    price: 1099,
    image: "../../../assets/products-foto/corset.jpg"
},
{
  id: 1151,
  title: "Корсет model 5",
  price: 549,
  image: "../../../assets/products-foto/corset.jpg"
},
{
  id: 1161,
  title: "Корсет model 6",
  price: 299,
  image: "../../../assets/products-foto/corset.jpg"
},
{
  id: 1171,
  title: "Корсет model 7",
  price: 1099,
  image: "../../../assets/products-foto/corset.jpg"
},
{
  id: 1181,
  title: "Корсет model 8",
  price: 549,
  image: "../../../assets/products-foto/corset.jpg"
},
{
  id: 1191,
  title: "Корсет model 9",
  price: 299,
  image: "../../../assets/products-foto/corset.jpg"
}
]

getCorsets(){
  return this.corsets;
}


  constructor() { }



}
