import { Component, OnInit } from '@angular/core';
import { KupalnikiService } from '../../services/kupalniki.service';
import { CommonModule} from '@angular/common';
import {ProductCatdComponent } from '../product-catd/product-catd.component';


@Component({
  selector: 'app-kupalniki',
  standalone: true,
  imports: [CommonModule, ProductCatdComponent],
  templateUrl: './kupalniki.component.html',
  styleUrl: './kupalniki.component.scss'
})
export class KupalnikiComponent  implements OnInit{
  
  constructor(private kupalnikiServise:KupalnikiService){
  }

  kupalnikiList:any[] = [];

ngOnInit(): void {
  this.kupalnikiList = this.kupalnikiServise.getKupalniki();
}


}
