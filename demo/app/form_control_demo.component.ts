// email: FormControl = new FormControl("", Validators.required);



import {Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'form-control-demo',
    template: `

        <p>
          <label>First Name:</label>
          <input type="text" formControlName="email">
        </p>
        <p>
          <label>Password:</label>
          <input type="password" formControlName="password">
        </p>

    `
})
export class FormControlDemoComponent {
  user:any = {}


  email: FormControl = new FormControl("", Validators.required);
  password: FormControl = new FormControl("", Validators.required);

  onSubmit() {
    console.log(this.user);
  }
}
