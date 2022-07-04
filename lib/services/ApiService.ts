import { Coord } from './../interfaces/interface';
import { LANGCODES } from './../constants/lang-codes';
import axios from "axios";
import { CURRENT, URL_APIWEATHER } from "../constants/constants";


export class ApiService{
    private APIKEY:string;
    private lang:string;
    private unit:string;

    constructor(apikey:string,lang:string='es',unit:string='metric'){
        this.APIKEY=apikey;
        this.setLang(lang);
        this.setUnits(unit);
    }

    private setLang(lang:string):void{
        //comprobamos que existe el codigo y sino le establecemos el español

        let languaje= LANGCODES.filter((l)=>{
            if(l.code==lang){
                return l;
            }
        });

        if(languaje.length===1){
            this.lang=`&lang=${lang}`;
        }else{
            this.lang=`&lang=es`;
        }
    }

    private setUnits(unit:string):void{
        this.unit=unit=="imperial" || unit=="metric"? `&units=${unit}`:'';
    }

    /**
     * Devuelve el tiempo de una ciudad dada
     * @param {nombre} nombre de la ciudad
     * @param {country} optional--> codigo del pais --> 'es' para España
     */
    public getWeatherByName(nombre:string, country:string=''):any{
        let params=`${this.lang}${this.unit}&appid=${this.APIKEY}`;
        let filter=country==''?`q=${nombre}`:`q=${nombre},${country}`;

        //llamamos a la api
        let url=`${URL_APIWEATHER}${CURRENT}${filter}${params}`;
        //llamamos a la api
        return axios.get(url).then((e) => {
          return e.data
        })
        .catch((error) => {
          return error
        });
    }

    //tipo objeto coord viene de nuestra interfaz--> espera un objeto de tipo coord
    public getWeatherByLonLat(location:Coord):any{
        let params=`${this.lang}${this.unit}&appid=${this.APIKEY}`;
        //comprobamos que la localización esta definida y no es nula
        let filter=location==undefined || location==null?`lat=40.416775&lon=-3.703790`:`lat=${location.lat}&lon=${location.lon}`;
        
        //llamamos a la api
        let url=`${URL_APIWEATHER}${CURRENT}${filter}${params}`;
        //llamamos a la api
        return axios.get(url).then((e) => {
          return e.data
        })
        .catch((error) => {
          return error
        });
    }

    /**
     * Nos devuelve el tiempo actual por código postal y pais
     * @param cp codigo postal
     * @param country codigo pais --> 'es' para España
     */
    public getWeatherByZip(cp:string, country:string=''):any{
        let params=`${this.lang}${this.unit}&appid=${this.APIKEY}`;
        let filter=country==''?`zip=${cp}`:`zip=${cp},${country}`;
       
        //llamamos a la api
        let url=`${URL_APIWEATHER}${CURRENT}${filter}${params}`;
        return axios.get(url).then((e) => {
          return e.data
        })
        .catch((error) => {
          return error
        });
    }
}