const m=require('./build/main').ApiService;

//creamos el objeto apiService que requiere el token y la configuración de lenguaje y unidades
const api=new m('2f352ec7533ee287cb831d386a68e58a','es','metric');

//api.getWeatherByName('Madrid','es');

//api.getWeatherByLonLat();
api.getWeatherByZip('15001','es').then((data)=>{
    console.log(data);
})