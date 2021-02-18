import { Usuario } from '@formulario1/prueba-formulario/data-access';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'formulario1-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.styl']
})
export class RegistroUsuarioComponent implements OnInit {

  @Output() outUsuarioRegistrado = new EventEmitter<Usuario>();

  formulario: FormGroup;
  informacionAdicional: FormControl;
  //usuariosRegistrados: Usuario[] = [];

  tipoDeIdentifiacion: Array<string> = ['C.C', 'T.I', 'P.P'];
  listaGenero: Array<string> = ['Femenino', 'Masculino'];
  listaGrupoSanguineo: Array<string> = ['O', 'A', 'B', 'AB'];

  private validadorNumeros: any = '/^[0-9]';
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private validarCaracteres: string = '^[0-9]{10}$';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.informacionAdicional = new FormControl(false);
    this.crearFormulario();
    this.activarValidadores();
  }

  private crearFormulario(): void {
    this.formulario = this.fb.group({
      primerNombre: [
        null,
        [Validators.required, Validators.min(3), Validators.maxLength(15)],
      ],
      segundoNombre: [
        null,
        [Validators.required, Validators.min(3), Validators.maxLength(15)],
      ],
      primerApellido: [
        null,
        [Validators.required, Validators.min(3), Validators.maxLength(15)],
      ],
      segundoApellido: [
        null,
        [Validators.required, Validators.min(3), Validators.maxLength(15)],
      ],
      tipoIdentificacion: [null, Validators.required],
      numeroIdentifiacion: [
        null,
        [Validators.required, Validators.pattern(this.validarCaracteres)],
      ],
      grupoSanguineo: [null, Validators.required],
      factorRH: [null, Validators.required],
      genero: [null, [Validators.required]],
      edad: [{ value: null, disabled: true }],
      fechaNacimiento: [null, [Validators.required]],
      correo: [null, [Validators.email, Validators.pattern(this.emailPattern)]],
      celular: [null],
      telefonoFijo: [null],
    });

    this.formulario.get('fechaNacimiento').valueChanges.subscribe((res) => {
      const convertAge = new Date(res);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      const edad = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
      this.formulario.get('edad').setValue(edad);
    });
  }


  onGuardarDatosTabla() {
    if (this.formulario.invalid) {
      return;
    }
    const usuarioCreado: Usuario = this.formulario.value;
    usuarioCreado.edad= this.formulario.get('edad').value;
    this.outUsuarioRegistrado.next(usuarioCreado);
  }

  activarValidadores() {
    if (this.informacionAdicional.value) {
      Object.keys(this.formulario.value)
        .map((control, i) => ({ name: control, id: i }))
        .filter((control) => control.id > 10)
        .forEach((control) => {
          this.formulario.controls[control.name].markAsUntouched();
          this.formulario.controls[control.name].setValidators([
            Validators.required,
          ]);
          this.formulario.controls[control.name].updateValueAndValidity();
        });
    }
  }

  limpiarValidadores(){
    if (!this.informacionAdicional.value) {
      Object.keys(this.formulario.value)
        .map((control, i) => ({ name: control, id: i }))
        .filter((control) => control.id > 10)
        .forEach((control) => {
          this.formulario.controls[control.name].markAsUntouched();
          this.formulario.controls[control.name].clearValidators();
          this.formulario.controls[control.name].updateValueAndValidity();
        });
    }
  }
}
