import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  dataReturned:any;

  constructor(public navCtrl: NavController,private _formBuilder: FormBuilder,public modalController: ModalController,private router: Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });

    
  }
  goBack(stepper: MatStepper){
    stepper.previous();
}

goForward(stepper: MatStepper){
    stepper.next();
}
goPrivateCarDetails(){

  this.router.navigate(['/privatecarotherdetails']);
}
}
