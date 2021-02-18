import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioEstado } from './services/usuarios-estado';

@NgModule({
  imports: [CommonModule],
})
export class PruebaFormularioDataAccessModule {
  static forChild(): ModuleWithProviders<PruebaFormularioDataAccessModule>{
    return{
      ngModule: PruebaFormularioDataAccessModule,
      providers:[
        UsuarioEstado
      ]
    }
  }
}
