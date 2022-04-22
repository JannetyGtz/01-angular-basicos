import { Injectable } from "@angular/core";
import { Personaje } from '../Interfaces/dbz.interfaces';


@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder:1400},
        {
          nombre: 'Vegeta',
          poder:2500},
      ];

      get personajes():Personaje[]{
        return [...this._personajes];
      }
      
    constructor() {
    }

    agregarPersonaje(personaje: Personaje){
      this._personajes.push(personaje);
    }


}