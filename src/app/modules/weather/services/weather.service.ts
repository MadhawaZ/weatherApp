import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WeatherApiConstants} from '../weather-constants';
import {environment} from "../../../../environments/environment";
import {Weather} from "../models/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherData?: Weather;

  constructor(private http: HttpClient) {
  }

  findWeather(lat: number, lng: number) {
    return this.http.get<Weather>(WeatherApiConstants.FIND_CURRENT_WEATHER, {
      params: {
        lat: lat, lon: lng,
        appid: environment.weatherApiKey
      }
    });
  }

  findCurrentWeather(lat: number, lng: number) {
    this.findWeather(lat, lng).subscribe((result: Weather) => {
      this.weatherData = result;
    });
  }
}
