import { Component, OnInit, Input } from '@angular/core';
import { IMember } from '../IMember';

@Component({
  selector: 'app-Member-component',
  templateUrl: './Member-component.component.html',
  styleUrls: ['./Member-component.component.css']
})
export class MemberComponentComponent implements OnInit {
  @Input() Member:IMember
  constructor() { }

  ngOnInit() {
  }

}
