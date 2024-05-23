import { Component} from '@angular/core';
import { ActiveProductService } from '../../services/active-product.service';
import { IProduct } from '../../models/products';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent{



  product = this.activeProductService.get();

  constructor(private activeProductService: ActiveProductService){

  }

  





}
