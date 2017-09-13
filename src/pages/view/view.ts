import { Component  } from '@angular/core'; //ViewChild
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http"
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {  }
  lat: any = "";
  lon: any = "";
  get_url: string;
  output_data: {};
  get_data(lat: String, lon: String)
  {
    this.get_url = "http://154.16.249.162/CROS/?url=https://api.darksky.net/forecast/f9f73e0da4c7414ecd68e8e0f3edcdf8/"+lat+","+lon;
    return this.http.get(this.get_url)
    .map(res => res.json())
  }
  executed_data(json_data)
  {
    this.output_data = json_data;
  }

  ionViewDidLoad() {
    this.lat = this.navParams.get("lat");
    this.lon = this.navParams.get("lon");
    if(this.lat != "")
      {
        this.get_data(this.lat, this.lon).subscribe
        (
          data => this.executed_data(data),
          Error => alert("Response ERROR"),
          () => console.log("http finished sucessfully")
        );
      }
      else
        {
          alert("No location data found");
        }
  }

}
