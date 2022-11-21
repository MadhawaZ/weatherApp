import {environment} from '../../../environments/environment';

export class WeatherApiConstants {

  public static API_URL = environment.weatherApiUrl;
  public static LOCATION_API_URL = environment.locationApiUrl;

  public static FIND_LOCATION = WeatherApiConstants.LOCATION_API_URL + 'v1/autocompleteo';

}
