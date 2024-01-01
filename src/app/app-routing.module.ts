import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GenericCenovnikComponent } from './generic-cenovnik/generic-cenovnik.component';

const routes: Routes=[
  {path:'generic', component: GenericCenovnikComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
