import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-app',
  templateUrl: './start-app.page.html',
  styleUrls: ['./start-app.page.scss'],
})
export class StartAppPage implements OnInit {

  slideOpts = {
    effect: 'flip',
    autoplay: {
    delay: 2000
    }
    };

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoSignin(){
    this.router.navigate(['/login']);
  }
}
