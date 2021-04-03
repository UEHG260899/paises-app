import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;


  constructor(private paisService: PaisService) { }

  buscar(){
    this.hayError = false;
    this.paisService.bucsarPais(this.termino)
        .subscribe((paises) => {
          console.log(paises);
        }, (err) => {
          this.hayError = true;
        });
  }



}
