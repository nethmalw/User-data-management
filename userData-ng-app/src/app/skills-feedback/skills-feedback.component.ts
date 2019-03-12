import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-skills-feedback',
  templateUrl: './skills-feedback.component.html',
  styleUrls: ['./skills-feedback.component.css']
})
export class SkillsFeedbackComponent implements OnInit {

  model:SkillsFeedbackViewModel = {
    
    skill:'',
    number:''

  };
  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  sendSkills():void{
    this.apiService.newSkill(this.model).subscribe(
      res => {
        location.reload();
      },
      err=>{
        
      }
      
    );
  }
}

export interface SkillsFeedbackViewModel{
    
    skill:String;
    number:String;
    
}
