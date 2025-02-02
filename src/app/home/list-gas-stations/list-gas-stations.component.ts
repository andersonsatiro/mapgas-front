import { Component } from '@angular/core';
import { SelectItemComponent } from "./select-item/select-item.component";

@Component({
  selector: 'app-list-gas-stations',
  imports: [SelectItemComponent],
  templateUrl: './list-gas-stations.component.html',
  styleUrl: './list-gas-stations.component.scss'
})
export class ListGasStationsComponent {

}
