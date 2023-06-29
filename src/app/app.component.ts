import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista-RodriguezP-Lisandro';
  numero = 0;
  hayError = true;
  alumnos = ['Lisandro', 'Manuel', 'Sofia', 'Belen','Pedro','Maria Jose','Hector'];

  myFontSize = '20px';
}
