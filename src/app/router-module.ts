import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectPageComponent } from "./home/project-page/project-page.component";
import { ProjectDetailsComponent} from "./home/project-details/project-details.component";
import { PageNotFoundComponent } from "./home/page-not-found/page-not-found.component";
const appRoutes: Routes = [
  { path: '',
    component: ProjectPageComponent,
    pathMatch: 'full'
  },
  { path: 'ProjectDetailsComponent',
    component: ProjectDetailsComponent
  },
  { path: '**',
    component: ProjectPageComponent
  }
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
