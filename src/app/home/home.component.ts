import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainTitleComponent } from "./main-title/main-title.component";
import { LocationFormComponent } from "./location-form/location-form.component";
import { SuggestionComponent } from "./suggestion/suggestion.component";
import { ListGasStationsComponent } from "./list-gas-stations/list-gas-stations.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MainTitleComponent, LocationFormComponent, SuggestionComponent, ListGasStationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
