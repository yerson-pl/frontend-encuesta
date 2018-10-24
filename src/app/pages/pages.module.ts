import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { PageRoutingModule } from './page-routing.module';


// Modules
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],

  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],


  imports: [
    SharedModule,
    PageRoutingModule
  ]

})
export class PagesModule { }
