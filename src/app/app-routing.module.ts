import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { ShoesComponent } from './components/shoes/shoes.component'
import { ApparelComponent } from './components/apparel/apparel.component'
import { ContactComponent } from './components/contact/contact.component'
import { MainComponent } from './components/main/main.component'

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'shoes', component: ShoesComponent},
  {path: 'apparel', component: ApparelComponent},
  {path: 'contact', component: ContactComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
