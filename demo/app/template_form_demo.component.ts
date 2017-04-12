import {Component} from '@angular/core';

@Component({
    selector: 'template-form-demo',
    template: `
      <form #form="ngForm" (ngSubmit)="onSubmit()">
        Form is valid {{form.valid}}
        <p>
          <label>email:</label>
          <input name="email"
            type="email"
            #email="ngModel"
            [(ngModel)]="user.email"
            required>
            <span *ngIf="!email.valid">Email was not valid. Please enter an email!</span>

        </p>
        <p>
          <label>Password:</label>
          <input name="password" type="password"
            [(ngModel)]="user.password" required>
        </p>
        <p>
          <button [disabled]="!form.valid">Submit</button>
        </p>
        {{user | json}}
      </form>
    `
})
export class TemplateFormDemoComponent {
  user:any = {}

  onSubmit() {
    console.log(this.user);
  }
}
