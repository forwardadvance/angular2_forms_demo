import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormDemoComponent } from './template_form_demo.component';
import { FormBuilderDemoComponent } from './form_builder_demo.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, TemplateFormDemoComponent, FormBuilderDemoComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
