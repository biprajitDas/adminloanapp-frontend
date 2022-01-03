
import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing/forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadSpinnerModule } from '../load-spinner/load-spinner.module';

import { AlertModule } from '../shared/alert/alert.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsRoutingModule,
    LoadSpinnerModule,
    AlertModule,
    ReactiveFormsModule
  ],
  declarations: [FormsComponent],
  providers: [],
  exports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class customFormsModule { }