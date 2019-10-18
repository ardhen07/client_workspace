import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StartAppPage } from './start-app.page';
import { MatCarouselModule } from '@ngmodule/material-carousel';
const routes: Routes = [
  {
    path: '',
    component: StartAppPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCarouselModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [StartAppPage]
})
export class StartAppPageModule {}
