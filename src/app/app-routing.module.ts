import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/weather/components/home/home.component";
import {CurrentWeatherComponent} from "./modules/weather/components/current-weather/current-weather.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'weather/search'
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('./modules/weather/weather.module').then((m) => m.WeatherModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

export const routeParams = [];
