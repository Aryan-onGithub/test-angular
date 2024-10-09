import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bahu',
  templateUrl: './bahu.component.html',
  styleUrl: './bahu.component.css'
})
export class BahuComponent {

  @Output() send = new EventEmitter<string>()
  message(value: string){
    this.send.emit(value)
  }
}
