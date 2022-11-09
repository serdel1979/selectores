import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { SelectorComponent } from './pages/selector/selector.component';


@NgModule({
  declarations: [
    SelectorComponent
  ],
  imports: [
    CommonModule,
    PaisRoutingModule
  ]
})
export class PaisModule { }
