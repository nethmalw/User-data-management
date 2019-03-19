import { Component, OnInit } from '@angular/core';
import { SkillRecords } from './model/records';
import { ApiService } from '../shared/api.service';
import { Records } from '../notes/model/records';
import { EmployeeRecords } from './model/data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  records: SkillRecords[] = [];
  info:SkillRecords[] = [];
  selectedRecord:SkillRecords[] = [];
  employeeRecords: Records[] = [];
  mapping:EmployeeRecords[] = [];
  
  constructor(private apiService: ApiService) { }

  model:SkillsViewModel = {
    
    skill:'',
    number:''
  };
  

  ngOnInit() {
    this.getAllSkills();
    this.getAllRecords();

  }

  public getAllSkills(){
    this.apiService.getAllSkills().subscribe(
      res => {
        this.records = res;
        for(let i=0; i<this.records.length; i++){
        }
      },
      err => {
        
      }
    );
  }

  addSkill(){
    let newSkillRecord:SkillRecords = {
      skill:"Default",
      number:"0",
      employees:""
    };
    
    this.updateSkill(newSkillRecord);
  }

  updateSkill(updatedRecords: SkillRecords){
      this.apiService.postSkills(updatedRecords.number,updatedRecords).subscribe(
        res => {
          location.reload();
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

  public getAllRecords(){
    this.apiService.getAllRecords().subscribe(
      res => {
        this.employeeRecords = res;
      },
      err => {
        
      }
    );
  }

}


export interface SkillsViewModel{
  
  skill:String;
  number:String;

}

