import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TimepickerModule} from 'ngx-bootstrap/timepicker';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {routeParams} from './weather-routing.module';

@NgModule({
  declarations: [routeParams],
  imports: [CommonModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ModalModule,
    TypeaheadModule,
    BsDatepickerModule,
    HttpClientModule,
    BsDropdownModule,
    TimepickerModule,
    RouterModule, CommonModule, routeParams
  ],
  providers: [
  ]

})

export class WeatherModule {
}
