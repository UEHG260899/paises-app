import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';


import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    /* this.activatedRoute.params
      .subscribe( ({ id }) => {
        this.paisService.buscarDetalles(id)
            .subscribe( (pais) => {
              console.log(pais);
            });
      });  */

      this.activatedRoute.params.pipe(
        //Recibe el Observable anterior y retorna otro Observable
        switchMap( ( {id} ) => this.paisService.buscarDetalles(id) ),
      ).subscribe( (pais) => {
        this.pais = pais;
      });
  }

}
