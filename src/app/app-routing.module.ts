import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DatapageComponent} from './datapage/datapage.component';
import {AddComponent} from './add/add.component';


const routes: Routes = [
  {path: 'app-home', component: HomeComponent},
  {path: 'app-datapage', component: DatapageComponent},
  {path: 'app-add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
