// email: FormControl = new FormControl("", Validators.required);

import {Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'form-builder-demo',
    styles:[
      "label {color:red}",
      "input {border:1px solid green}"
    ],
    template: `
      <form [formGroup]="form" novalidate (ngSubmit)="onSubmit()">
        <p>
          <label>Email:</label>
          <input type="email" formControlName="email" >{{form.controls.email.valid}}
        </p>
        <p>
          <label>Password:</label>
          <input type="password" formControlName="password">
        </p>
        <p>
          <button type="submit" [disabled]="!form.valid">Submit</button>
        </p>
        {{user | json}}
      </form>

    `
})
export class FormBuilderDemoComponent {
  user:any = {}

  form: FormGroup;
  // email:FormControl = new FormControl("", Validators.required)

  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "email": [this.user.email, Validators.required],
          "password":[this.user.password, Validators.required]
      });
  }

  onSubmit() {
    console.log(this.form.controls);
  }
}
