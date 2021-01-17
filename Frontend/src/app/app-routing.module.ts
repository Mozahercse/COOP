import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponentComponent } from './MemberInfo/MemberList-component/MemberList-component.component';
import { RegistrationComponent } from './MemberInfo/Registration/Registration/Registration.component';
import { AppModule } from './app.module';

const routes: Routes = [
  // {path:"",component:AppModule},
  // {path:"Dashboard",component:AppModule},
  {path:"Member-List",component:MemberListComponentComponent},
  {path:"Registration",component:RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
