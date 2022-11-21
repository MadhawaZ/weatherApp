import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {routeParams, WeatherRoutingModule} from './weather-routing.module';
import {GooglePlaceModule} from "ngx-google-places-autocomplete";

@NgModule({
  declarations: [routeParams],
  imports: [CommonModule,
    TypeaheadModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule,
    WeatherRoutingModule,
    GooglePlaceModule
  ],
  exports: [
  ],
  providers: [
  ]

})

export class WeatherModule {
}
