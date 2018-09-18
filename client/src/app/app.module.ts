import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductnewComponent } from './productnew/productnew.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProducteditComponent,
    ProductnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
