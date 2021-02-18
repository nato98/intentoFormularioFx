import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormularioPadreComponent } from './formulario-padre/formulario-padre.component';

import { PruebaFormularioDataAccessModule } from '@formulario1/prueba-formulario/data-access';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PruebaFormularioUiModule } from '@formulario1/prueba-formulario/ui';

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

    PruebaFormularioDataAccessModule,
    PruebaFormularioUiModule,

    RouterModule.forChild([{ path: '', component: FormularioPadreComponent }]),
  ],
  declarations: [FormularioPadreComponent],
})
export class PruebaFormularioFeatureFormularioPadreModule {}
