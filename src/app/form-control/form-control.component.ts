import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  signup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl( '', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')])
})

  error = ''


  print() {
    console.log(this.signup.value);
    if (this.signup.controls['email'].errors?.['required']) {
      this.error = "email is required"
    }
    console.log(this.error);

  }

  ngOnInit(): void {
    this.signup.valueChanges.subscribe({
      next: (res: any) => {
        console.log(res);

      }
    })
  }

}
