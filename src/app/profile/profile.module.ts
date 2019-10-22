import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule ,MatRadioModule,MatIconModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
