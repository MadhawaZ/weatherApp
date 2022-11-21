import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WeatherApiConstants} from '../weather-constants';
import {environment} from "../../../../environments/environment";
import {Weather} from "../models/weather";
import {Place} from "../models/place";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherData?: Weather;

  constructor(private http: HttpClient) {
  }

  public findWeather(lat: number, lng: number) {
    return this.http.get(WeatherApiConstants.FIND_CURRENT_WEATHER, {
      params: {
        lat: lat, lon: lng,
        appid: environment.weatherApiKey
      }
    });
  }

  findCurrentWeather(lat: number, lng: number) {
    this.findWeather(lat, lng).subscribe((result: any) => {
      this.weatherData = result;
    });
  }
}
