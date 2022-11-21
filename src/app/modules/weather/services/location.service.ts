import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherApiConstants} from '../weather-constants';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {
  }

  public suggestLocation(location: string) {
    return this.http.get(WeatherApiConstants.FIND_LOCATION, {
      params: {
        q: location, place: 'city',
        key: 'pk.2539f554751c24572abd5c8fd0261b2e'
      }
    });
  }
}
