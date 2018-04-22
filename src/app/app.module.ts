import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from "./material.module";


import { AppComponent } from './app.component';
import { LoginComponent } from './navigation/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { PanelComponent } from './navigation/panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    CustomMaterialModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
