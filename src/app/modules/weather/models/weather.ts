import {Place} from "./place";

export interface Weather {
  weather: Weather[]
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Cloud;
  name: string;
}

export interface Weather {
  // @ts-ignore
  main: string,
  description: string,
  icon: string
}

export interface Main {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
  sea_level: number,
  grnd_level: number
}

export interface Wind {
  speed: number,
  deg: number
}

export interface Cloud {
  all: number
}
