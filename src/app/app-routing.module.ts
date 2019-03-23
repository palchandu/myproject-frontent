import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path:'about',component:AboutComponent},
  { path:'services',component:ServicesComponent},
  { path:'skills',component:SkillsComponent},
  { path:'education',component:EducationComponent},
  { path:'experience',component:ExperienceComponent},
  { path:'works',component:WorkComponent},
  { path:'blogs',component:BlogsComponent},
  { path:'contact',component:ContactComponent},
  { path:'',redirectTo:'/blogs',pathMatch:'full'}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
