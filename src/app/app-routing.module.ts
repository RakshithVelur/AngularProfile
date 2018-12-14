import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { navbarRoute } from '../app/layouts/navbar/navbar.route';
import { HomeComponent } from '../app/layouts/home/home.component';
import { AboutComponent } from './layouts/about/about.component';
import { SkillsComponent } from './layouts/skills/skills.component';

const routes: Routes = [
  navbarRoute,
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
