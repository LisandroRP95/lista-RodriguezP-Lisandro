import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  title = 'Lista-RodriguezP-Lisandro';
  numero = 0;
  hayError = true;
  alumnos = ['Lisandro', 'Manuel', 'Sofia', 'Belen','Pedro','Maria Jose','Hector'];

  myFontSize = '20px';
}
