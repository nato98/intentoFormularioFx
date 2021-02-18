import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import(
            '@formulario1/prueba-formulario/feature-formulario-padre'
          ).then(
            (module) => module.PruebaFormularioFeatureFormularioPadreModule
          ),
      },
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class PruebaFormularioFeatureShellModule {}
