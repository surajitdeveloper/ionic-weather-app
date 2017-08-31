import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http"
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {
  GoogleMaps,
  GoogleMap,
  MarkerOptions,
  LatLng,
  GoogleMapOptions,
  GoogleMapsEvent,
  Marker,
  CameraPosition
 } from '@ionic-native/google-maps';
 import { GoogleMapsLatLng } from 'ionic-native';
declare var google;
@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  map: GoogleMap;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private googleMaps: GoogleMaps) {  }
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
loadMap(lat, lng) {
  let location: GoogleMapsLatLng = new GoogleMapsLatLng(lat, lng);
  //let location = new LatLng(lat, lng);
  this.map = new GoogleMap('map', {
    controls: {
      compass: true,
      myLocationButton: true,
      indoorPicker: true
    },
    gestures: {
      scroll: true,
      tilt: true,
      rotate: true,
      zoom: true
    },
    camera: {
      target: {
        lat: lat,
        lng: lng
      },
      tilt: 30,
      zoom: 15,
      bearing: 50
    }
  });
  
  this.map.addMarker({
    'position': location,
    'visible': true,
    'title': "nesto"
  }); 
}
  ionViewDidLoad() {
    this.lat = this.navParams.get("lat");
    this.lon = this.navParams.get("lon");
    this.loadMap(this.lat, this.lon);
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