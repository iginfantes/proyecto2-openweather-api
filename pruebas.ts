import {ApiService} from './lib/services/ApiService';

let m=new ApiService('2f352ec7533ee287cb831d386a68e58a','es','metric');

m.getWeatherByZip('15001','es').then((data)=>{
    console.log(data);
});