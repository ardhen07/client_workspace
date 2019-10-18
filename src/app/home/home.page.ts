import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loaderToShow: any;
  constructor(private router: Router,public loadingController: LoadingController) {}
 
  async vehicleInfo()  {
    this.loaderToShow = this.loadingController.create({
      message: 'Please Wait..',
      translucent: true,
      animated:true,
    }).then((res) => {
      res.present();
  
      res.onDidDismiss().then((dis) => {
        console.log('Loading complete..');
        this.router.navigate(['/vehicle-info']);
      });
    });
    this.hideLoader();
  }
  async customer()  {
    this.loaderToShow = this.loadingController.create({
      message: 'Please Wait..',
      translucent: true,
      animated:true,
    }).then((res) => {
      res.present();
  
      res.onDidDismiss().then((dis) => {
        console.log('Loading complete..');
        this.router.navigate(['/customer']);
      });
    });
    this.hideLoader();
  }

  async employee()  {
    this.loaderToShow = this.loadingController.create({
      message: 'Please Wait..',
      translucent: true,
      animated:true,
    }).then((res) => {
      res.present();
  
      res.onDidDismiss().then((dis) => {
        console.log('Loading complete..');
        this.router.navigate(['/employee']);
      });
    });
    this.hideLoader();
  }
  async userGroup()  {
    this.loaderToShow = this.loadingController.create({
      message: 'Please Wait..',
      translucent: true,
      animated:true,
    }).then((res) => {
      res.present();
  
      res.onDidDismiss().then((dis) => {
        console.log('Loading complete..');
        this.router.navigate(['/user-group']);
      });
    });
    this.hideLoader();
  }
  async channelPartner()  {
    this.loaderToShow = this.loadingController.create({
      message: 'Please Wait..',
      translucent: true,
      animated:true,
    }).then((res) => {
      res.present();
  
      res.onDidDismiss().then((dis) => {
        console.log('Loading complete..');
        this.router.navigate(['/channel-partner']);
      });
    });
    this.hideLoader();
  }
  async profile()  {
    this.loaderToShow = this.loadingController.create({
      message: 'Please Wait..',
      translucent: true,
      animated:true,
    }).then((res) => {
      res.present();
  
      res.onDidDismiss().then((dis) => {
        console.log('Loading complete..');
        this.router.navigate(['/profile']);
      });
    });
    this.hideLoader();
  }

  async accountSettings()  {
    this.loaderToShow = this.loadingController.create({
      message: 'Please Wait..',
      translucent: true,
      animated:true,
    }).then((res) => {
      res.present();
  
      res.onDidDismiss().then((dis) => {
        console.log('Loading complete..');
        this.router.navigate(['/account-settings']);
      });
    });
    this.hideLoader();
  }

  async logout()  {
    this.loaderToShow = this.loadingController.create({
      message: 'Please Wait..',
      translucent: true,
      animated:true,
    }).then((res) => {
      res.present();
  
      res.onDidDismiss().then((dis) => {
        console.log('Loading complete..');
        this.router.navigate(['/login']);
      });
    });
    this.hideLoader();
  }
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 1000);
  }

 
}
