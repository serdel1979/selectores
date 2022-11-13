import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  })
  constructor(private fb: FormBuilder,
        private paisesService: PaisesService) { }


  regiones: string[]=[];

  paises: PaisSmall[]=[];

  frontera: string[]=[];

  cargando: boolean = false;
  
  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap( () => {
        this.miFormulario.get('pais')?.reset('');
        this.cargando = true;
      }),
      switchMap(region => this.paisesService.getPaisesPorRegion(region))
    )
    .subscribe(paises => {
      this.paises = paises;
      this.cargando = false;
    })

    //cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap( () => {
        this.miFormulario.get('frontera')?.reset('');
        this.cargando = true;
      }),
      switchMap(cod => this.paisesService.getPaisPorCodigo(cod))
    )
    .subscribe(pais=>{
      this.frontera = pais![0]?.borders || [] ;
      this.cargando = false;
    })

  }

  guardar(){
    console.log(this.miFormulario.value);
  }

}
