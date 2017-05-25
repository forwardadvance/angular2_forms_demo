// email: FormControl = new FormControl("", Validators.required);



import {Component} from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app',
    template: `
      <h1>Template Driven Form</h1>
      <template-form-demo></template-form-demo>
      <h1>Reactive Form</h1>
      <form-builder-demo></form-builder-demo>
    `
})
export class AppComponent {
}
