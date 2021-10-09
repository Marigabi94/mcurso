import { MatSelectModule } from '@angular/material/select';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  typesOfList: string[] = ['Mi perfil', 'Calendario', 'Cuenta', 'Cursos', 'Historial de compras'];
  nombre: string = 'María Uzcategui';
  profesion: string = 'Ing. en Informática';
  current_selected: any = 'Mi perfil';

  onSelection(e: any, v: any) {
    return (this.current_selected = e.option.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
