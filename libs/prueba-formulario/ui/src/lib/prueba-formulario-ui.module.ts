import { PruebaFormularioDataAccessModule } from './../../../data-access/src/lib/prueba-formulario-data-access.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTableModule,
    MatIconModule,

    PruebaFormularioDataAccessModule,
  ],
  declarations: [RegistroUsuarioComponent, ListarUsuariosComponent],
  exports: [RegistroUsuarioComponent, ListarUsuariosComponent],
})
export class PruebaFormularioUiModule {}
