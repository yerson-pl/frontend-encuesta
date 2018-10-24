import {
  MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
  MatIconModule, MatListModule, MatCardModule, MatFormFieldModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
            MatIconModule, MatListModule, MatCardModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
            MatIconModule, MatListModule, MatCardModule, MatFormFieldModule],
})
export class MyCustomMaterialModule { }
