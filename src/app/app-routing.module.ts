import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'vehicle-info', loadChildren: './vehicle-info/vehicle-info.module#VehicleInfoPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'add-vehicle-info', loadChildren: './vehicle-info/add-vehicle-info/add-vehicle-info.module#AddVehicleInfoPageModule' },
  { path: 'header', loadChildren: './common/header/header.module#HeaderPageModule' },
  { path: 'channel-partner', loadChildren: './channel-partner/channel-partner.module#ChannelPartnerPageModule' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'employee', loadChildren: './employee/employee.module#EmployeePageModule' },
  { path: 'user-group', loadChildren: './user-group/user-group.module#UserGroupPageModule' },
  { path: 'reseller', loadChildren: './reseller/reseller.module#ResellerPageModule' },
  { path: 'account-settings', loadChildren: './account-settings/account-settings.module#AccountSettingsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
