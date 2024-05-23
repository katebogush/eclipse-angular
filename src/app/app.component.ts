import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './components/UI/header/header.component';
import { SidebarComponent } from './components/UI/sidebar/sidebar.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 

}
