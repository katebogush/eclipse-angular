import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/products';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ActiveProductService } from '../../services/active-product.service';


@Component({
  selector: 'app-product-catd',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-catd.component.html',
  styleUrl: './product-catd.component.scss'
})
export class ProductCatdComponent {
  constructor(private activeProductService: ActiveProductService, private router: Router){

  }

@Input() 
product:IProduct={} as IProduct;

  onProductDetailsClick(): void{
    this.activeProductService.set(this.product);
    this.router.navigate(['/product', this.product.id])
  }

}
