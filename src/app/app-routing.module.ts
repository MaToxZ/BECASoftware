import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './navigation/login/login.component';
import { PanelComponent } from './navigation/panel/panel.component';

const routes: Routes = [
  {path: 'panel', component: PanelComponent},
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
