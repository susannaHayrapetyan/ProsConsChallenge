import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProsConsComponent } from './pros-cons.component';

const routes: Routes = [{
  path: '',
  component: ProsConsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProsConsRoutingModule {
}
