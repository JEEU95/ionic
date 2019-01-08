import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PeticionesProvider} from '../../providers/peticiones/peticiones';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public personas: any = [];
constructor(
  private _peticionesService: PeticionesProvider
) { }

ngOnInit() {
  this._peticionesService.getPersonas().subscribe(
    result=> {
      this.personas=result;
      console.log('Se recupero los datos de una manera correcta');
  },
  error=>{
    console.log(<any>error)
  });
}

}
