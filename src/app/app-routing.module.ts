import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputUserDataFormComponent } from './components/input-user-data-form/input-user-data-form.component';
import { DisplayUserDataComponent } from './components/display-user-data/display-user-data.component';

const routes: Routes = [
  {
    path: '',
    component: InputUserDataFormComponent 
    /*non si usa piu il tag del componente nel appComponent perche si è attivato il router-outlet e me lo porta lui*/
  },
  {
    path: 'user/:uid',
    component: DisplayUserDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
