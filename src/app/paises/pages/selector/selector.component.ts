import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required]
  })
  constructor(private fb: FormBuilder,
        private paisesService: PaisesService) { }


  regiones: string[]=[];

  paises: PaisSmall[] = [];
  
  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    //cuando cambia la region
    this.miFormulario.get('region')?.valueChanges.subscribe(
      region=> {
        this.paisesService.getPaisesPorRegion(region).subscribe(
          paises=> {
            this.paises= paises;
          }
        )
      }
    )
  }

  guardar(){
    console.log(this.miFormulario.value);
  }

}
