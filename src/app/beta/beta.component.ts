import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrl: './beta.component.css'
})
export class BetaComponent {

  @Input() message: string = 'land';
  
}
