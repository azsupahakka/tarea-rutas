import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { PaisesComponent } from './paises/paises.component';
import { RouterModule } from '@angular/router';
import { EuropeosComponent } from './paises/europeos/europeos.component';
import { AmericanosComponent } from './paises/americanos/americanos.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    PaisesComponent,
    EuropeosComponent,
    AmericanosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HomeComponent,
    PaisesComponent,
  ]
})
export class CosasModule { }
