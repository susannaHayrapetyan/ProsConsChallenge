import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProsConsRoutingModule } from './pros-cons-routing.module';
import { ProsConsComponent } from './pros-cons.component';

import { ProsConsService } from '../data/services';
import { ProsConsItemComponent } from './pros-cons-item/pros-cons-item.component';

@NgModule({
  imports: [
    CommonModule,
    ProsConsRoutingModule,
  ],
  declarations: [ProsConsComponent, ProsConsItemComponent],
  providers: [
    ProsConsService,
  ],
})
export class ProsConsModule { }
