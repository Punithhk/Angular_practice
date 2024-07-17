// Asynchronous Routing

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormhandleComponent } from './formhandle.component';
import { FormRoutingModule } from './formhandle-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [FormRoutingModule, ReactiveFormsModule, FormsModule, CommonModule],
  declarations: [FormhandleComponent],
})
export class FormModule {}
