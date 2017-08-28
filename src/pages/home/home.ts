import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewPage } from "../view/view";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }
  //lat: any;
  //lon: any;
  ionViewWillEnter()
  {
    if(navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(function(position)
        {
          if(position.coords.latitude != null && position.coords.longitude != null)
            {
              localStorage.lat = position.coords.latitude;
              localStorage.lon = position.coords.longitude;
            }
        });
        this.navCtrl.push(ViewPage);
      }
      else
      {
        alert("No access");
      }
  }
  
}
