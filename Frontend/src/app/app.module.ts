import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import{MemberComponentComponent}from'./MemberInfo/Member-component/Member-component.component';
import{MemberListComponentComponent}from'./MemberInfo/MemberList-component/MemberList-component.component';
import{MemberService}from'./Services/Member.Service';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponentComponent,
    MemberListComponentComponent,
    NavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
