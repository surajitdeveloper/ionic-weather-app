import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewPage } from "../view/view";
import { AndroidPermissions } from '@ionic-native/android-permissions';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //

  constructor(public navCtrl: NavController, private androidPermissions: AndroidPermissions) { }
  
  successgps(lat, lon)   
  {
      this.navCtrl.push(ViewPage,{lat: lat, lon: lon});
  }
  failedgps = function(e)
  {

  }
  /*
  get_permission()
  {
    //this.androidPermissions.requestPermissions(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION, this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION])
  }
  get_gps()
  {
    if(navigator.geolocation)
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
  }
  check_permission()
  {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
      success => this.get_gps(),
      err => this.get_permission());
  }
  */
  ionViewWillEnter()
  {
    //getCurrentPosition(function(position)
    //this.check_permission();
    //this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION, this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION]);
    if(navigator.geolocation)
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
  }
  
}
