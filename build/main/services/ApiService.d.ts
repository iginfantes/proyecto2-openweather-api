import { Coord } from './../interfaces/interface';
export declare class ApiService {
    private APIKEY;
    private lang;
    private unit;
    constructor(apikey: string, lang?: string, unit?: string);
    private setLang;
    private setUnits;
    /**
     * Devuelve el tiempo de una ciudad dada
     * @param {nombre} nombre de la ciudad
     * @param {country} optional--> codigo del pais --> 'es' para España
     */
    getWeatherByName(nombre: string, country?: string): any;
    getWeatherByLonLat(location: Coord): any;
    /**
     * Nos devuelve el tiempo actual por código postal y pais
     * @param cp codigo postal
     * @param country codigo pais --> 'es' para España
     */
    getWeatherByZip(cp: string, country?: string): any;
}
