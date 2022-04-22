import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  @Input() personajeNuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) {
    
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  agregar(){ 
    if(this.personajeNuevo.nombre.trim().length === 0){return;}

    // this.onNuevoPersonaje.emit(this.personajeNuevo);
    this.dbzService.agregarPersonaje(this.personajeNuevo);

    this.personajeNuevo = {
      nombre: '',
      poder: 0
    };

  }

}
