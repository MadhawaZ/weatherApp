import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherApiConstants} from '../weather-constants';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {
  }

  public suggestLocation(location: string) {
    return this.http.get(WeatherApiConstants.FIND_LOCATION, {
      params: {
        input: location, limit: 5, types:'establishment',
        key: environment.locationApiKey
      }, headers: {'Access-Control-Allow-Origin': 'http://localhost:4200'}
    });
  }
}
