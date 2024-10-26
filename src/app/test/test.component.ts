import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  print(name: string) {
    const html = `
      hello ${name}
    `;
  
    const add: Element | null = document.querySelector(".card");
    if (add !== null) {
      add.innerHTML += html;
    } else {
      console.error("Element with class '.card' not found.");
    }
  }
  
  constructor(){
    this.print("aryan");
    console.log("what the fuck")
  }
  
}
