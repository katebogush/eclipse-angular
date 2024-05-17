import { Component, OnInit } from '@angular/core';
import { CorsetsService } from '../../services/corsets.service';
import { CommonModule} from '@angular/common';
import {ProductCatdComponent } from '../product-catd/product-catd.component';

@Component({
  selector: 'app-corsets',
  standalone: true,
  imports: [CommonModule, ProductCatdComponent],
  templateUrl: './corsets.component.html',
  styleUrl: './corsets.component.scss'
})
export class CorsetsComponent implements OnInit {

  constructor(private corsetsServise:CorsetsService){
  }

  corsetsList:any[] = [];

ngOnInit(): void {
  this.corsetsList = this.corsetsServise.getCorsets();
}


}
