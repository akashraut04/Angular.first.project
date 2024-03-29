import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCompComponent } from './create-comp/create-comp.component';
import { GetCompComponent } from './get-comp/get-comp.component';
import { UpdateCompComponent } from './update-comp/update-comp.component';
import{DeleteCompComponent} from './delete-comp/delete-comp.component'

const routes: Routes = [
  { path: 'get', component: GetCompComponent },
  {path:'create', component: CreateCompComponent},
  {path:'update',component :UpdateCompComponent},
  {path:'delete',component :DeleteCompComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponants =[GetCompComponent,CreateCompComponent]
