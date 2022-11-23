import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, routeParams} from './app-routing.module';
import {AppComponent} from './app.component';
import {TypeaheadModule} from "ngx-bootstrap/typeahead";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {WeatherModule} from "./modules/weather/weather.module";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, routeParams ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypeaheadModule,
    FormsModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
