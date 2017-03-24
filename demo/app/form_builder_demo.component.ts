// email: FormControl = new FormControl("", Validators.required);



import {Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'form-builder-demo',
    template: `
      <form [formGroup]="form" novalidate (ngSubmit)="onSubmit()">
        <p>
          <label>Email:</label>
          <input type="email" formControlName="email">
        </p>
        <p>
          <label>Password:</label>
          <input type="password" formControlName="password">
        </p>
        <p>
          <button type="submit" [disabled]="!form.valid">Submit</button>
        </p>
      </form>
    `
})
export class FormBuilderDemoComponent {
  user:any = {}

  form: FormGroup;

  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "email": ["", Validators.required],
          "password":["", Validators.required]
      });
  }

  onSubmit() {
    console.log(this.user);
  }
}
