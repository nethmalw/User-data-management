import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillRecords } from './model/records';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  records: SkillRecords[] = [];
  info:SkillRecords[] = [];
  selectedRecord:SkillRecords[] = [];

  constructor(private apiService: ApiService) { }

  model:SkillsViewModel = {

    number:'',
    skill:''

  };
  

  ngOnInit() {
    this.getAllSkills();
  }

  public getAllSkills(){
    this.apiService.getAllSkills().subscribe(
      res => {
        this.records = res;
      },
      err => {
        
      }
    );
  }

  addSkill(){
    let newSkillRecord:SkillRecords = {
      skill:"Default",
      number:""
    };

    this.apiService.sendSkills(newSkillRecord).subscribe(
      res=>{
        newSkillRecord.number = res.number;
        this.records.push(newSkillRecord);
      },
      err=>{}
    );
  }

  updateSkill(updatedRecords: SkillRecords){
      this.apiService.postSkills(updatedRecords.number,updatedRecords).subscribe(
        res => {
          
        }
      );
  }

  deleteSkill(deleteRecord:SkillRecords){
    if(confirm("Are you sure you want to delete the record?")){
      this.apiService.deleteSkill(deleteRecord.number).subscribe(
        res=>{
          let index = this.records.indexOf(deleteRecord);
          this.records.splice(index,1);
        }
      )
    }
  }

  getAllSkillsInfo(){
    this.apiService.getAllSkillsInfo().subscribe(
      res=>{
        this.info = res;
      },
      err=>{

      }
    );
  }


}

export interface SkillsViewModel{
  number:String;
  skill:String;

}

