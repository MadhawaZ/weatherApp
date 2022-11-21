import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CurrentWeatherComponent} from "./components/current-weather/current-weather.component";
import {SearchLocationComponent} from "./components/search-location/search-location.component";

const routes: Routes = [{
  path: 'search',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WeatherRoutingModule {
}

export const routeParams = [HomeComponent, SearchLocationComponent, CurrentWeatherComponent];
