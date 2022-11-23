import {WeatherService} from "./weather.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Weather} from "../models/weather";
import {HttpClient} from "@angular/common/http";
import {WeatherApiConstants} from "../weather-constants";
import {of} from "rxjs";

describe('WeatherService', () => {

  let service: WeatherService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });

    service = TestBed.inject(WeatherService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Should return weather data for given geo coordinates', (done: DoneFn) => {
    let lat = 6.0243;
    let lng = 80.7941;

    service.findWeather(lat, lng).subscribe((result: Weather) => {
      expect(result.name).toEqual('Tangalle');
    })
    const req = httpTestingController.expectOne(WeatherApiConstants.FIND_CURRENT_WEATHER+"?lat=6.0243&lon=80.7941&appid=a1ea7934a81e396db1cc6106f6691987");
    req.flush({});
  })

  /*let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let weatherService: WeatherService;*/

  /*beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    weatherService = new WeatherService(httpClientSpy);
  });*/

 /* it('Should return weather data for given geo coordinates)', (done: DoneFn) => {

    let expectedWeather ={};
    let lat = 6.0243;
    let lng = 80.7941;

    httpClientSpy.get.and.returnValue(of(expectedWeather));

    weatherService.findWeather(lat,lng).subscribe({
      next: (result: Weather) => {
        expect(result.name)
          .withContext('expected result')
          .toEqual("Tangalle");
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });*/
})
