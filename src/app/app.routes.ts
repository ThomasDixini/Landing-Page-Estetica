import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main } from '../pages/main/main';

export const routes: Routes = [
  { path: '', component: Main }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload' }), ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
