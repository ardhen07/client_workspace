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
  vehicleInfo(){
    this.router.navigate(['/vehicle-info']);
  }
  async presentLoading()  {
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
  
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 4000);
  }
}
