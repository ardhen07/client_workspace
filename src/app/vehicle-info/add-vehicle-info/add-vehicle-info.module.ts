import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddVehicleInfoPage } from './add-vehicle-info.page';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MaterialModule } from '../../material/material.module';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: AddVehicleInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatMenuModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  // entryComponents: [HeaderPage],
  declarations: [AddVehicleInfoPage]
})
export class AddVehicleInfoPageModule {}
