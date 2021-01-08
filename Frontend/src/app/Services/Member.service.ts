import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IMember } from '../MemberInfo/IMember';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class MemberService {

  constructor(private http:HttpClient) { }
  public getAllMember():Observable<IMember[]>{
    return this.http.get('Data/Member.json').pipe(
      map(
        data=>{
          const members:Array<IMember>=[];
          for (let i in data) {
          if(data.hasOwnProperty(i)){
            members.push(data[i]);
          }
          }
          return members;
        }
      )

    );
  }

  public getAllMemberApi():Observable<any[]>{
    return this.http.get('https://localhost:5001/WeatherForecast').pipe(
      map(
        data=>{
          const apiData:any[]=[];
          for (let i in data) {
          if(data.hasOwnProperty(i)){
            apiData.push(data[i]);
          }
          }
          return apiData;
        }
      )

    );
  }

}
