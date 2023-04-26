import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  { path: 'warehouse', component: WarehouseComponent},
  { path: 'home', component: FrontPageComponent},
  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
