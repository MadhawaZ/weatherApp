import {environment} from '../../../environments/environment';

export class WeatherApiConstants {

  public static WEATHER_API_URL = environment.weatherApiUrl;
  public static LOCATION_API_URL = environment.locationApiUrl;

  public static STARTER_LOCATION_LAT = 6.3162;
  public static STARTER_LOCATION_LNG = 80.8433;

  public static FIND_LOCATION = WeatherApiConstants.LOCATION_API_URL + 'maps/api/place/autocomplete/json';

  public static FIND_CURRENT_WEATHER = WeatherApiConstants.WEATHER_API_URL + '/data/2.5/weather';



}
