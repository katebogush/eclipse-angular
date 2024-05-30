import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { CommonModule} from '@angular/common';
import { BasketItem } from '../../models/basketItems';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit{

  constructor(private basketServise:BasketService){

  }

  itemsList:BasketItem[] =[];



  ngOnInit(): void {
    this.itemsList = this.basketServise.get(); 
  }

  increase(item:BasketItem){
    item.quantity++
    item.totalSum = item.quantity*item.price
  }

  decrease(item:BasketItem){
    item.quantity--
    if(item.quantity<0){
      item.quantity = 0
    }
    item.totalSum = item.quantity*item.price
  }

  removeProductFromBasket(item:BasketItem){
    this.basketServise.removeItem(item.id)
  }



}
