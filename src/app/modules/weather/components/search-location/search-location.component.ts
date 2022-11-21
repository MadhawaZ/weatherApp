import {Component, Inject, OnInit} from '@angular/core';
import {LocationService} from "../../services/location.service";
import {Place} from "../../models/place";

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {

  locationQuery: string = "";
  places: Array<Place> = [];
  selectedPlace: Place | undefined;

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
    this.selectedPlace = new Place();
  }

  searchPlaces() {
    this.locationService.suggestLocation(this.locationQuery).subscribe((result: any) => {
      this.places = result;
    });
  }

  setSelectedPlace(event: any) {
    this.selectedPlace = event.item;
  }

}
