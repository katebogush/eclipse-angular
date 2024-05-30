import { Component} from '@angular/core';
import { ActiveProductService } from '../../services/active-product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasketService } from '../../services/basket.service';
import { BasketItem } from '../../models/basketItems';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent{

  constructor(private activeProductService: ActiveProductService, private basketServise: BasketService){

  }

  product = this.activeProductService.get();

  addToBasket(): void {
    this.basketServise.set(this.product!);
    console.log(this.product)
    
  }

}
