"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const lang_codes_1 = require("./../constants/lang-codes");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants/constants");
class ApiService {
    constructor(apikey, lang = 'es', unit = 'metric') {
        this.APIKEY = apikey;
        this.setLang(lang);
        this.setUnits(unit);
    }
    setLang(lang) {
        //comprobamos que existe el codigo y sino le establecemos el español
        let languaje = lang_codes_1.LANGCODES.filter((l) => {
            if (l.code == lang) {
                return l;
            }
        });
        if (languaje.length === 1) {
            this.lang = `&lang=${lang}`;
        }
        else {
            this.lang = `&lang=es`;
        }
    }
    setUnits(unit) {
        this.unit = unit == "imperial" || unit == "metric" ? `&units=${unit}` : '';
    }
    /**
     * Devuelve el tiempo de una ciudad dada
     * @param {nombre} nombre de la ciudad
     * @param {country} optional--> codigo del pais --> 'es' para España
     */
    getWeatherByName(nombre, country = '') {
        let params = `${this.lang}${this.unit}&appid=${this.APIKEY}`;
        let filter = country == '' ? `q=${nombre}` : `q=${nombre},${country}`;
        //llamamos a la api
        let url = `${constants_1.URL_APIWEATHER}${constants_1.CURRENT}${filter}${params}`;
        //llamamos a la api
        return axios_1.default.get(url).then((e) => {
            return e.data;
        })
            .catch((error) => {
            return error;
        });
    }
    //tipo objeto coord viene de nuestra interfaz--> espera un objeto de tipo coord
    getWeatherByLonLat(location) {
        let params = `${this.lang}${this.unit}&appid=${this.APIKEY}`;
        //comprobamos que la localización esta definida y no es nula
        let filter = location == undefined || location == null ? `lat=40.416775&lon=-3.703790` : `lat=${location.lat}&lon=${location.lon}`;
        //llamamos a la api
        let url = `${constants_1.URL_APIWEATHER}${constants_1.CURRENT}${filter}${params}`;
        //llamamos a la api
        return axios_1.default.get(url).then((e) => {
            return e.data;
        })
            .catch((error) => {
            return error;
        });
    }
    /**
     * Nos devuelve el tiempo actual por código postal y pais
     * @param cp codigo postal
     * @param country codigo pais --> 'es' para España
     */
    getWeatherByZip(cp, country = '') {
        let params = `${this.lang}${this.unit}&appid=${this.APIKEY}`;
        let filter = country == '' ? `zip=${cp}` : `zip=${cp},${country}`;
        //llamamos a la api
        let url = `${constants_1.URL_APIWEATHER}${constants_1.CURRENT}${filter}${params}`;
        return axios_1.default.get(url).then((e) => {
            return e.data;
        })
            .catch((error) => {
            return error;
        });
    }
}
exports.ApiService = ApiService;
