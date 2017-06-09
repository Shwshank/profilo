import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from "./home/page/page.component";
import { Page1Component } from "./home/page1/page1.component";
import { Page2Component } from "./home/page2/page2.component";
import { Page3Component } from "./home/page3/page3.component";
import { PageNotFoundComponent } from "./home/page-not-found/page-not-found.component";
const appRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    pathMatch: 'full'
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  },
  {
    path: 'page3',
    component: Page3Component
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { } 
