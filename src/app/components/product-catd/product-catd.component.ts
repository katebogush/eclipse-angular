import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/products';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-catd',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-catd.component.html',
  styleUrl: './product-catd.component.scss'
})
export class ProductCatdComponent {

@Input() 
product:IProduct={} as IProduct;


}
