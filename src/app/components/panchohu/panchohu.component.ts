import { Component, OnInit } from '@angular/core';
import { PanchohuService } from '../../services/panchohu.service';
import { CommonModule} from '@angular/common';
import {ProductCatdComponent } from '../product-catd/product-catd.component';


@Component({
  selector: 'app-panchohu',
  standalone: true,
  imports: [CommonModule, ProductCatdComponent],
  templateUrl: './panchohu.component.html',
  styleUrl: './panchohu.component.scss'
})
export class PanchohuComponent implements OnInit{

  constructor(private panchohuServise:PanchohuService){
  }

  panchohuList:any[] = [];

ngOnInit(): void {
  this.panchohuList = this.panchohuServise.getPanchohu();
}


}
