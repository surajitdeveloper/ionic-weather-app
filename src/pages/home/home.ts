import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewPage } from "../view/view";
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private geolocation: Geolocation) { }
  
  successgps(lat, lon)   
  {
    
      this.navCtrl.push(ViewPage,{lat: lat, lon: lon});
  }
  failedgps = function(e)
  {

  }

  ionViewWillEnter()
  {
    /*if(navigator.geolocation)
      {
        //navigator.geolocation.watchPosition(this.successgps,this.failedgps,{maximumAge:60000, timeout: 2000});
        navigator.geolocation.getCurrentPosition((pos)=>{
          var crd = pos.coords;
          this.successgps(crd.latitude, crd.longitude);
       });
      }
      else
      {
        alert("No access");
      }
      */
      this.geolocation.getCurrentPosition().then((resp) => {
        this.successgps(resp.coords.latitude, resp.coords.longitude);
       }).catch((error) => {
         console.log('Error getting location', error);
       });
  }
  
}
