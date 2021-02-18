// importaciones Angular
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';

// importaciones externas
import { Store } from '../../store';
import { Usuario } from '@formulario1/prueba-formulario/data-access';

// Inicializacion de esado
const estadoDefault: Usuario[] = [];

@Injectable()
export class UsuarioEstado extends Store<Usuario[]>{

//Variables
  public listaUsuario: Usuario[]=[];

//Selectores$
 readonly listaDeUsuarios$: Observable<Usuario[]>= this.state$.pipe(map(estado => estado, distinctUntilChanged()))

//Acciones SET y GET
 get getListadoDeUsuarios(){ return this.state; };
 set setListadoDeUsuario(usuarios: Usuario[]) { this.setState(usuarios) }

 constructor(){
  // iniciamos el estado en la SUPER clase
   super(estadoDefault)
 }

 //Acciones / funciones
 public createNuevoUsuario(usuario: Usuario): void{
    this.setState([...this.state, usuario])
 }
}
