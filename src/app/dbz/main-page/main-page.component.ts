import { Component, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  nuevoPersonaje: Personaje ={
    nombre: 'Maestro Roshi',
    poder: 1200
  }

  constructor() {
  }

}
