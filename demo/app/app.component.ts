// email: FormControl = new FormControl("", Validators.required);



import {Component} from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app',
    template: `
      <template-form-demo></template-form-demo>
      <form-builder-demo></form-builder-demo>
    `
})
export class AppComponent {
}
