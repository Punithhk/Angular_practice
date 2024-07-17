import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormhandleComponent } from './formhandle.component';

const FormhandleRoutes: Routes = [
  {
    path: '',
    component: FormhandleComponent,
    /*subrouting
    children :[
    {path: 'home/:id',component:name}
  ]
  */
  },
];

@NgModule({
  imports: [RouterModule.forChild(FormhandleRoutes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
