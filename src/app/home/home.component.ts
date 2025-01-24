import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainTitleComponent } from "./main-title/main-title.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MainTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
