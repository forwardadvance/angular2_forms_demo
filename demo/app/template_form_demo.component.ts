import {Component} from '@angular/core';

@Component({
    selector: 'template-form-demo',
    template: `
      <form #form="ngForm" (ngSubmit)="onSubmit()">
        <p>
          <label>email:</label>
          <input name="email" type="email"
            [(ngModel)]="user.email" required>
        </p>
        <p>
          <label>Password:</label>
          <input name="password" type="password"
            [(ngModel)]="user.password" required>
        </p>
        <p>
          <button [disabled]="!form.valid">Submit</button>
        </p>
    </form>
    `
})
export class TemplateFormDemoComponent {
  user:any = {}

  onSubmit() {
    console.log(this.user);
  }
}
