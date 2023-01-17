import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import { GetCompComponent } from './get-comp/get-comp.component';
import{CreateCompComponent}from './create-comp/create-comp.component'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import{UpdateCompComponent} from './update-comp/update-comp.component';
import { DeleteCompComponent } from './delete-comp/delete-comp.component'






@NgModule({
  declarations: [
    AppComponent,
    // routingComponants,
    GetCompComponent,
  CreateCompComponent,
  UpdateCompComponent,
  DeleteCompComponent 
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
