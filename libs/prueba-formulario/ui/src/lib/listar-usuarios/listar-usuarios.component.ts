// Importaciones Angular
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

// Importaciones externas
import { Usuario } from '@formulario1/prueba-formulario/data-access';

@Component({
  selector: 'formulario1-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.styl'],
})
export class ListarUsuariosComponent implements OnInit {

  // Inputs
  @Input() inListaUsuariosRegistrados$: Subject<Usuario[]>;

  // Outputs
  @Output() outUsuarioSeleccionadoParaVerInformacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() outUsuarioSeleccionadoParaEditar: EventEmitter<any> = new EventEmitter<any>();
  @Output() outUsuarioSeleccionadoParaEliminar: EventEmitter<any> = new EventEmitter<any>();

  //Declaracion de variables
  destroy$: Subject<boolean> = new Subject<boolean>();

  usuarios: Usuario[] = [
    {
      primerApellido:'Orozco',
      segundoApellido: 'Yasnó',
      primerNombre: 'Natalia',
      segundoNombre: 'NN',
      tipoIdentifiacion: 'C.C',
      numeroIdentifiacion: 1234567,
      grupoSanguineo: 'O',
      factorRH: '+',
      genero: 'femenino',
      edad: 23,
      fechaNacimiento: '05/01/1998'
    }
  ]

  dataSource: MatTableDataSource<Usuario>;
  selection = new SelectionModel<Usuario>(true, []);

  constructor() {}

  ngOnInit(): void {

  this.inListaUsuariosRegistrados$.pipe(takeUntil(this.destroy$))
  .subscribe(data=>this.dataSource = new MatTableDataSource(data));
  this.dataSource = new MatTableDataSource(this.usuarios);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy$.next(true);
    this.destroy$.complete()
  }

  displayedColumns: string[] = [
    'nombre',
    'identificacion',
    'grupoSanguíneo',
    'genero',
    'edad',
    'fechaNacimiento',
    'informacion',
    'select',
  ];

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Usuario): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.numeroIdentifiacion + 1
    }`;
  }

  verInformacionUsuario(usuarioParaVerSuInformacion: Usuario){
    console.log(usuarioParaVerSuInformacion);
    this.outUsuarioSeleccionadoParaVerInformacion.next(usuarioParaVerSuInformacion);
  }
}
