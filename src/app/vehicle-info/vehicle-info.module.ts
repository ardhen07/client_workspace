import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VehicleInfoPage } from './vehicle-info.page';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule } from "@angular/material";
const routes: Routes = [
  {
    path: '',
    component: VehicleInfoPage
  }
];

@NgModule({
  imports: [
    MatInputModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,   

    RouterModule.forChild(routes)
  ],
  declarations: [VehicleInfoPage]
})
export class VehicleInfoPageModule {}
