import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
// import { FormhandleComponent } from './formhandle/formhandle.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'check', pathMatch: 'full', component: HelloComponent },
  {
    path: 'form',
    loadChildren: () =>
      import('./formhandle/formhandle.module').then((a) => a.FormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
