export interface Usuario {
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  tipoIdentifiacion: string;
  numeroIdentifiacion: number;
  grupoSanguineo: string;
  factorRH: string;
  genero: string;
  edad: number;
  fechaNacimiento: string;
  correo?: string;
  celular?: number;
  telefonoFijo?: number;
}
