import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChannelPartnerPage } from './channel-partner.page';
import { HeaderPage } from '../common/header/header.page';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
const routes: Routes = [
  {
    path: '',
    component: ChannelPartnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[HeaderPage],
  declarations: [ChannelPartnerPage,HeaderPage]
})
export class ChannelPartnerPageModule {}
