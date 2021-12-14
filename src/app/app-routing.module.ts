import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cosas/home/home.component';
import { FloresComponent } from './cosas/flores/flores.component';
import { PaisesComponent } from './cosas/paises/paises.component';
import { ComidasComponent } from './cosas/comidas/comidas.component';

const routes: Routes =  [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'flores',
    component: FloresComponent
  },
  {
    path: 'paises',
    component: PaisesComponent
  },
  {
    path: 'comidas',
    component: ComidasComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
