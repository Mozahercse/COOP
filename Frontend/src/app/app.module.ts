import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import{MemberComponentComponent}from'./MemberInfo/Member-component/Member-component.component';
import{MemberListComponentComponent}from'./MemberInfo/MemberList-component/MemberList-component.component';
import{MemberService}from'./Services/Member.Service';
import {RegistrationComponent} from'./MemberInfo/Registration/Registration/Registration.component'

@NgModule({
  declarations: [
    AppComponent,
    MemberComponentComponent,
    MemberListComponentComponent,
    RegistrationComponent,
    NavbarComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
