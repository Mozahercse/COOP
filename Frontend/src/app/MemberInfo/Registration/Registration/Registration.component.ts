import { Component, OnInit,ViewChild  } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-Registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  frmRegistration:FormGroup;
  age:string;
  imageSrc: string;
  formSubmit:boolean=false;
  constructor() { }

  ngOnInit() {
    this.frmRegistration=new FormGroup({
      appDate:new FormControl(new Date(),Validators.required),
      memberCode:new FormControl("test",Validators.required),
      memberNameEN:new FormControl("dgfdf",Validators.required),
      memberNameBN:new FormControl(),
      fatherName:new FormControl(),
      motherName:new FormControl(),
      maritStatus:new FormControl('Single'),
      spouseName:new FormControl(),
      marageDate:new FormControl(new Date()),
      gender:new FormControl('Male'),
      dob:new FormControl(),
      bloodGroup:new FormControl('Unknown'),
      mobile:new FormControl("09876545679",[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern('^[0-9]+$')]),
      nid:new FormControl("0987654567",[Validators.required,Validators.maxLength(17),Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
      email:new FormControl("mozaherhn@gmail.com",[Validators.required,Validators.email]),
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
      nomName:new FormControl("sfdfd",Validators.required),
      nomRel:new FormControl(),
      nomNID:new FormControl("0989098765",[Validators.required,Validators.maxLength(17),Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
      nomMobile:new FormControl("87987098687",[Validators.required,Validators.maxLength(11),Validators.minLength(11),Validators.pattern('^[0-9]+$')]),
      appFee:new FormControl(500,[Validators.required,Validators.pattern('^[0-9]+$')]),
      receiveHead:new FormControl(1),
      memberPic: new FormControl(),
      memberPicSource: new FormControl(),
      memberNID:new FormControl(),
      nomineefPic:new FormControl(),
      nomineeNID:new FormControl()
    });
  }

  get f(){
    return this.frmRegistration.controls;
  }

  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.frmRegistration.patchValue({
          memberPicSource: reader.result
        });

      };

    }
  }

  onSubmit(){
    this.formSubmit=true;
    if(this.frmRegistration.valid){
      sessionStorage.setItem("member",JSON.stringify(this.frmRegistration.value))
      alertify.success('Form Submit Success');
    }else{
      alertify.error('Form Submit Error');
    }

    console.log(this.frmRegistration.value);
  }
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
  ageCalculation(){

    this.age=this.frmRegistration.get('dob').value;
    if(this.age!=null){
      let dob=new Date(this.age);
    let now=new Date();
    let res=((now.getTime() - dob.getTime()) / 1000 / 60 / 60 / 24/30/12);
    this.age=parseInt(res.toString())>1?parseInt(res.toString())+" Years":parseInt(res.toString())+" Year";
    console.log( parseInt(res.toString()));

    }

  }
}
