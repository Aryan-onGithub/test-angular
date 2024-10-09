import { Component } from '@angular/core';

@Component({
  selector: 'app-saas',
  templateUrl: './saas.component.html',
  styleUrl: './saas.component.css'
})
export class SaasComponent {

  note:string = ''

  message(value: string){
  this.note = value
  }

}
