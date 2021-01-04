import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {

  frmRegistration:FormGroup;
  age:string;
  constructor() { }

  ngOnInit() {
    this.frmRegistration=new FormGroup({
      appDate:new FormControl(new Date(),Validators.required),
      memberCode:new FormControl("",Validators.required),
      memberNameEN:new FormControl("",Validators.required),
      memberNameBN:new FormControl(),
      fatherName:new FormControl(),
      motherName:new FormControl(),
      maritStatus:new FormControl('Single'),
      spouseName:new FormControl(),
      marageDate:new FormControl(),
      gender:new FormControl('Male'),
      dob:new FormControl(),
      bloodGroup:new FormControl('Unknown'),
      mobile:new FormControl(null,[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern('^[0-9]+$')]),
      nid:new FormControl(null,[Validators.required,Validators.maxLength(17),Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      profession:new FormControl(),
      desig:new FormControl(),
      officAdd:new FormControl(),
      offcMobile:new FormControl(),
      presenAddress:new FormControl(),
      parmVill:new FormControl(),
      parmPost:new FormControl(),
      parmPostCode:new FormControl(),
      parmPS:new FormControl(),
      parmDist:new FormControl(),
      parmDiv:new FormControl(),
      emergencyPhone:new FormControl(null,[Validators.maxLength(11),Validators.minLength(11),Validators.pattern('^[0-9]+$')]),
      refName:new FormControl(null),
      refAddress:new FormControl(),
      refMobile:new FormControl(null,[Validators.maxLength(11),Validators.minLength(11),Validators.pattern('^[0-9]+$')]),
      nomName:new FormControl(null,Validators.required),
      nomRel:new FormControl(),
      nomNID:new FormControl(null,[Validators.required,Validators.maxLength(17),Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
      nomMobile:new FormControl(null,[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern('^[0-9]+$')]),
      appFee:new FormControl(500,[Validators.required,Validators.pattern('^[0-9]+$')]),
      receiveHead:new FormControl(1),
    });
  }
  onSubmit(){
    console.log(this.frmRegistration);
  }

  ageCalculation(){
    this.age=this.frmRegistration.get('dob').value;
    let dob=new Date(this.age);
    let now=new Date();
    let res=((now.getTime() - dob.getTime()) / 1000 / 60 / 60 / 24/30/12);
    this.age=parseInt(res.toString())>1?parseInt(res.toString())+" Years":parseInt(res.toString())+" Year";
    console.log( parseInt(res.toString()));
  }
}
