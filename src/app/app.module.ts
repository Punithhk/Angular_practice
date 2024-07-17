import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IdirectiveDirective } from './idirective.directive';
import { FormhandleComponent } from './formhandle/formhandle.component';
import { OrderComponent } from './order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectbackComponent } from './connectback/connectback.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    // FormhandleComponent,
    IdirectiveDirective,
    OrderComponent,
    ConnectbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  //this bootstrap option will do the initial component render
  exports: [HelloComponent, AppComponent],
  // this makes the components usable by other modules
})
export class AppModule {}
