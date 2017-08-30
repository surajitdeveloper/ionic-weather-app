import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http"
//import { MapsAPILoader } from 'angular2-google-maps/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {
  GoogleMaps,
  GoogleMap,
  MarkerOptions,
  GoogleMapOptions,
  GoogleMapsEvent,
  Marker,
  CameraPosition
 } from '@ionic-native/google-maps';
declare var google;
@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  //@ViewChild('gmap') 
  //mapElement: ElementRef;
  //map: any;
  map: GoogleMap;
  mapElement: HTMLElement;
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
  /*
  initMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat,lng);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: latLng
    });

    this.directionsDisplay.setMap(this.map);
  }
  */
//
loadMap(lat, lng) {
  this.mapElement = document.getElementById("map");

  let mapOptions: GoogleMapOptions = {
    camera: {
      target: {
        lat: lat,
        lng: lng
      },
      zoom: 18,
      tilt: 30
    }
  };

  this.map = this.googleMaps.create(this.mapElement, mapOptions);

  // Wait the MAP_READY before using any methods.
  //this.map.on(GoogleMapsEvent.MAP_READY).subscribe();
    /*.then(() => {
      alert('Map is ready!');

      // Now you can use all methods safely.
      this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: lat,
            lng: lng
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              alert('clicked');
            });
        });

    });*/
}

//
  ionViewDidLoad() {
    this.lat = this.navParams.get("lat");
    this.lon = this.navParams.get("lon");
    //this.initMap(this.lat, this.lon);
    
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
