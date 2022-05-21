import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';
  isDeleted: boolean = false;

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || this.heroeBorrado;
    this.isDeleted = true;
  }

}
