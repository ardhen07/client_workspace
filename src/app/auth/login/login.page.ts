import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loaderToShow: any;
  constructor(public loadingController: LoadingController,private router: Router) { }

  ngOnInit() {
  }
  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'Please wait....',
  //     duration: 2000
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();

  //   console.log('Loading dismissed!');
  // }
  async presentLoading()  {
    this.loaderToShow = this.loadingController.create({
      message: 'Please Wait..',
      translucent: true,
      animated:true,
    }).then((res) => {
      res.present();
  
      res.onDidDismiss().then((dis) => {
        console.log('Loading complete..');
        this.router.navigate(['/home']);
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
