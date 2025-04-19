import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-location-form',
  imports: [CommonModule],
  templateUrl: './location-form.component.html',
  styleUrl: './location-form.component.scss'
})
export class LocationFormComponent {

  invalidCep: boolean = false;

  changeCepValue(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const cep = inputElement.value;

    this.invalidCep = /[a-zA-Z]/.test(cep);

    if(this.invalidCep){
      this.invalidCep = true
      alert('tem letra')
    } else {
      console.log(cep)
    }
  }
}
