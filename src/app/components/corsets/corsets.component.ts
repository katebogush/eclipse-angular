import { Component, OnInit } from '@angular/core';
import { CorsetsService } from '../../corsets.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-corsets',
  standalone: true,
  imports: [CommonModule],
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
