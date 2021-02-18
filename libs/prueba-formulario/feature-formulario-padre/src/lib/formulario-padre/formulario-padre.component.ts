import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Usuario } from '@formulario1/prueba-formulario/data-access';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'formulario1-formulario-padre',
  templateUrl: './formulario-padre.component.html',
  styleUrls: ['./formulario-padre.component.styl'],
})
export class FormularioPadreComponent implements OnInit {

  listaUsuariosRegistrados: Usuario[] = [];
  mostrarComponentes: boolean = false;
  pasarDatosRegistro$: BehaviorSubject<Usuario[]> = new BehaviorSubject<Usuario[]>([]);

  constructor() {}

  ngOnInit(): void {
  }

  registrarUsuario(usuarioRegistrado: Usuario) {
    this.mostrarComponentes = false;
    this.listaUsuariosRegistrados.push(usuarioRegistrado);
    this.pasarDatosRegistro$.next(this.listaUsuariosRegistrados);
    console.log('Desde padre ', this.listaUsuariosRegistrados);
    this.mostrarComponentes = true;
  }
}
