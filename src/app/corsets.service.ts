import { Injectable } from '@angular/core';
import { IProducts } from './models/products';


@Injectable({
  providedIn: 'root'
})
export class CorsetsService {

private corsets:IProducts[] = [
  {
    id: 50024,
    title: "Жіночий корсет 1",
    price: 759,
    image: " hhhg"
},
{
    id: 3117,
    title: "Жіночий корсет 2",
    price: 549,
    image: " hhhg"
},
{
    id: 2990,
    title: "Жіночий корсет 3",
    price: 299,
    image: " hhhg"
},
{
    id: 1551,
    title: "Жіночий корсет 4",
    price: 1099,
    image: " hhhg"
}
]

getCorsets(){
  return this.corsets;
}


  constructor() { }



}
