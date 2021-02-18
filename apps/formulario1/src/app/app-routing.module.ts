import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'formulario',
    loadChildren: () =>
      import('@formulario1/prueba-formulario/feature-shell').then(
        (module) => module.PruebaFormularioFeatureShellModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
