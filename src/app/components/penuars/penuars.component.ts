import { Component, OnInit } from '@angular/core';
import { PenuarsService } from '../../services/penuars.service';
import { CommonModule} from '@angular/common';
import {ProductCatdComponent } from '../product-catd/product-catd.component';


@Component({
  selector: 'app-penuars',
  standalone: true,
  imports: [CommonModule, ProductCatdComponent],
  templateUrl: './penuars.component.html',
  styleUrl: './penuars.component.scss'
})
export class PenuarsComponent implements OnInit {
  constructor(private penuarsServise:PenuarsService){
  }

  penuarsList:any[] = [];

ngOnInit(): void {
  this.penuarsList = this.penuarsServise.getPenuars();
}


}
