import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, HttpModule } from "@angular/http"

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {  }
  lat: String;
  lon: String;
  get_url: string;
  output_data: {};
  get_data(lat: String, lon: String)
  {
    this.get_url = "http://surajitdeveloper.in/CROS/?url=https://api.darksky.net/forecast/f9f73e0da4c7414ecd68e8e0f3edcdf8/"+lat+","+lon;
    return this.http.get(this.get_url)
    .map(res => res.json())
  }
  executed_data(json_data)
  { 
    var p = json_data;
    //alert(JSON.stringify(p)); 
    this.output_data = p; 
  }
  ionViewDidLoad() {
    this.lat = localStorage.lat;
    this.lon = localStorage.lon;
    this.get_data(this.lat, this.lon).subscribe
    (
      data => this.executed_data(data),
      Error => alert("Response ERROR"),
      () => console.log("http finished sucessfully")
    );
  }

}
