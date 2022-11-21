import {Component, OnInit, ViewChild} from '@angular/core';
import {LocationService} from "../../services/location.service";
import {GooglePlaceDirective} from "ngx-google-places-autocomplete";
import {Address} from "ngx-google-places-autocomplete/objects/address";
import {WeatherApiConstants} from "../../weather-constants";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {

  /*locationQuery?: string;
  places?: Array<Place>; */

  lat: number = WeatherApiConstants.STARTER_LOCATION_LAT;
  lng: number = WeatherApiConstants.STARTER_LOCATION_LNG;

  @ViewChild("placesRef") placesRef?: GooglePlaceDirective;

  constructor(private locationService: LocationService,
              private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.findCurrentWeather(this.lat, this.lng);
  }

  public handleAddressChange(address: Address) {
    this.weatherService.findCurrentWeather(address.geometry.location.lat(), address.geometry.location.lng());
  }

  /* searchPlaces() {
     this.locationService.suggestLocation(this.locationQuery).subscribe((result: any) => {
       this.places = result;
     });
   }

   setSelectedPlace(event: any) {
     this.selectedPlace = event.item;
   }*/

}
