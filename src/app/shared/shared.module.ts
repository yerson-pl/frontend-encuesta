import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyCustomMaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  exports: [
    NavbarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MyCustomMaterialModule,
    RouterModule
  ],


})
export class SharedModule { }
