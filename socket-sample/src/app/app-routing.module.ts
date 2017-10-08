import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(appRoutes, {useHash:true})],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingMoudule {

}