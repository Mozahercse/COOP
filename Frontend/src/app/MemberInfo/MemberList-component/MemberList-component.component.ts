import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/Services/Member.Service';
import { IMember } from '../IMember';

@Component({
  selector: 'app-MemberList-component',
  templateUrl: './MemberList-component.component.html',
  styleUrls: ['./MemberList-component.component.css']
})
export class MemberListComponentComponent implements OnInit {
  Members:Array<IMember>;
  constructor(private memberService:MemberService) { }

  ngOnInit() {
    this.memberService.getAllMember().subscribe(
      data=>{
        this.Members=data;
        console.log(data);
      },error=>{
        console.log(error);
      }
    );
  }

}
