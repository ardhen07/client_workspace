import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { HomePage } from './home.page';
import {MatIconModule} from '@angular/material/icon';
import { HeaderPage } from '../common/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatMenuModule,
    MatIconModule,
    
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  exports: [HeaderPage],
  entryComponents: [HeaderPage],
  declarations: [HomePage,HeaderPage]
})
export class HomePageModule {



}
