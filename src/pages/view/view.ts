import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http"
declare var google;
@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  @ViewChild('map') 
  mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {  }
  lat: any = "";
  lon: any = "";
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
  initMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat,lng);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: latLng
    });

    this.directionsDisplay.setMap(this.map);
  }

  ionViewDidLoad() {
    this.lat = this.navParams.get("lat");
    this.lon = this.navParams.get("lon");
    this.initMap(this.lat, this.lon);
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
