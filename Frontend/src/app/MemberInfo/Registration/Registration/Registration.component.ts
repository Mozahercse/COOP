import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {

  memberReg:FormGroup;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.memberReg=new FormGroup({
      memberNameEN:new FormControl(),
      memberNameBN:new FormControl(),
      appDate:new FormControl(),
      memberCode:new FormControl(),
      fatherName:new FormControl(),
      motherName:new FormControl()
    });
  }
}
