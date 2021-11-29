import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

  componentes : Componente[] =[
    {
      icon: 'person-outline', 
      name: 'Registro', 
      redirecTo: '/input'
    },
    {
      icon: 'newspaper-outline', 
      name: 'Noticias', 
      redirecTo: '/noticias'
    },
    {
      icon: 'sunny-outline', 
      name: 'Datos', 
      redirecTo: '/datos'
    }

   
  ]

}
