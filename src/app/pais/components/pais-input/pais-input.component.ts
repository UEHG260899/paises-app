import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {


  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';


  ngOnInit(): void {
    this.debouncer.pipe(
      //Evita que el subscribe se ejecute hasta que pasen los 300 ms
      debounceTime(300)
    ).subscribe( valor => {
      this.onDebounce.emit(valor);
    });
  }


  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPrecionada(){
    this.debouncer.next(this.termino);
  }

}
