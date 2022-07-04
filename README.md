# Instrucciones OpenWeatherMap api library

### Como añadir

...
JS
const lib=require('modulo');
TS
import lib from 'modulo';
...

### Uso
...

*Obtener por zip --> TS
---- se instala npm install typescript ts-node
---- luego se ejecuta con npx ts-node pruebas.ts

import {ApiService} from './lib/services/ApiService';

let m=new ApiService('2f352ec7533ee287cb831d386a68e58a','es','metric');

m.getWeatherByZip('15001','es').then((data)=>{
    console.log(data);
});

// repuesta esperada:
{
  coord: { lon: -7.8049, lat: 42.3749 },
  weather: [
    { id: 800, main: 'Clear', description: 'cielo claro', icon: '01d' }
  ],
  base: 'stations',
  main: {
    temp: 28.78,
    feels_like: 28.15,
    temp_min: 28.78,
    temp_max: 28.78,
    pressure: 1016,
    humidity: 37,
    sea_level: 1016,
    grnd_level: 985
  },
  visibility: 10000,
  wind: { speed: 2.38, deg: 13, gust: 2.03 },
  clouds: { all: 2 },
  dt: 1656946937,
  sys: {
    type: 2,
    id: 2021300,
    country: 'ES',
    sunrise: 1656910773,
    sunset: 1656965479
  },
  timezone: 7200,
  id: 0,
  name: 'A Coruña',
  cod: 200
}
....

