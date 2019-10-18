import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
  loaderToShow: any;
  

  constructor(private router: Router,public loadingController: LoadingController) { }

  ngOnInit() {
  }
  vehicle_info(){
    this.router.navigate(['/vehicle-info']);
  }

  // async vehicle_info()  {
  //   this.loaderToShow = this.loadingController.create({
  //     message: 'Please Wait..',
  //     translucent: true,
  //     animated:true,
  //   }).then((res) => {
  //     res.present();
  
  //     res.onDidDismiss().then((dis) => {
  //       console.log('Loading complete..');
  //       this.router.navigate(['/vehicle-info']);
  //     });
  //   });
  //   this.hideLoader();
  // }
  
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 4000);
  }
}
