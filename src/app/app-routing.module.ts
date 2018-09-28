import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WaitForUserGuard, WaitForGroupGuard } from './data/guards';

const routes: Routes = [
  {
    path: 'pros-cons',
    canActivate: [WaitForUserGuard, WaitForGroupGuard],
    loadChildren: './+pros-cons/pros-cons.module#ProsConsModule'
  },
  { path: '', redirectTo: 'pros-cons', pathMatch: 'full' },
  { path: '**', redirectTo: 'pros-cons' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
