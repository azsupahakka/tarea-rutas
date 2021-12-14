import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FloresComponent } from './flores/flores.component';
import { HomeComponent } from './home/home.component';
import { PaisesComponent } from './paises/paises.component';
import { ComidasComponent } from './comidas/comidas.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    FloresComponent,
    HomeComponent,
    PaisesComponent,
    ComidasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    FloresComponent,
    HomeComponent,
    PaisesComponent,
    ComidasComponent
  ]
})
export class CosasModule { }
