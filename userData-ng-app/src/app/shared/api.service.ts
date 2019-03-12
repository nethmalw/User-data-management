import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Records } from '../notes/model/records';
import { SkillRecords } from '../skills/model/records';
import { Observable } from "rxjs";
import { FeedbackViewModel, FeedbackComponent } from '../feedback/feedback.component';
import { SkillsFeedbackViewModel, SkillsFeedbackComponent } from '../skills-feedback/skills-feedback.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private ALL_RECORDS_URL = "http://localhost:8082/topics/";
  private ALL_SKILLS_URL = "http://localhost:8082/skills/";

  constructor(private http: HttpClient) { 

  }

  //Employees
  getAllRecords() : Observable<Records[]>{
    return this.http.get<Records[]>(this.ALL_RECORDS_URL);
  }
  sendFeedback(feedback: FeedbackViewModel) : Observable<any>{
    return this.http.post(this.ALL_RECORDS_URL,feedback);
  }
  postRecord(id:String,records: Records): Observable<Records>{
    return this.http.put<Records>(this.ALL_RECORDS_URL  + id,records);
  }
  deleteRecord(id:String):Observable<any>{
    return this.http.delete(this.ALL_RECORDS_URL +id);
  }
  getAllInfo():Observable<Records[]>{
    return this.http.get<Records[]>(this.ALL_RECORDS_URL);
  }
  getInfoById(infoId:String):Observable<Records[]>{
    return this.http.get<Records[]>(this.ALL_RECORDS_URL+ infoId);
  }


  //Skills
  getAllSkills() : Observable<SkillRecords[]>{
    return this.http.get<SkillRecords[]>(this.ALL_SKILLS_URL);
  }
  newSkill(feedback: SkillRecords) : Observable<any>{
    return this.http.post(this.ALL_SKILLS_URL,feedback);
  }
  postSkills(id:String,records: SkillRecords): Observable<SkillRecords>{
    return this.http.put<SkillRecords>(this.ALL_SKILLS_URL  + id,records);
  }
  deleteSkill(id:String):Observable<any>{
    return this.http.delete(this.ALL_SKILLS_URL +id);
  }
  getAllSkillsInfo():Observable<SkillRecords[]>{
    return this.http.get<SkillRecords[]>(this.ALL_SKILLS_URL);
  }
  getSkillsInfoById(infoId:String):Observable<SkillRecords[]>{
    return this.http.get<SkillRecords[]>(this.ALL_SKILLS_URL+ infoId);
  }

}
