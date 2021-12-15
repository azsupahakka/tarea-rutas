import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cosas/home/home.component';
import { PaisesComponent } from './cosas/paises/paises.component';
import { EuropeosComponent } from './cosas/paises/europeos/europeos.component';
import { AmericanosComponent } from './cosas/paises/americanos/americanos.component';

const routes: Routes =  [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'paises',
    component: PaisesComponent,
    children: [
      {
        path:'europeos', component: EuropeosComponent
      },
      {
        path:'americanos', component: AmericanosComponent
      }
    ]
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
