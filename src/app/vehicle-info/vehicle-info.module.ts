import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VehicleInfoPage } from './vehicle-info.page';
import { MatInputModule, MatPaginatorModule, 
  MatProgressSpinnerModule, 
  MatSortModule, MatTableModule } from "@angular/material";
  import {MatIconModule} from '@angular/material/icon';
  import {MatMenuModule} from '@angular/material/menu';
  import { HeaderPageModule } from '../common/header/header.module';
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
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    
    RouterModule.forChild(routes)
  ],
  exports:[],
  entryComponents: [],
  declarations: [VehicleInfoPage]
})
export class VehicleInfoPageModule {


  
}
