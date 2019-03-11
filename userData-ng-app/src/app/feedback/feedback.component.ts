import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { SkillRecords } from '../skills/model/records';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  skills:SkillRecords[] = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  
  temp = new String();

  model:FeedbackViewModel = {

    name:'',
    email:'',
    date:'',
    skills:''

  };
  
  constructor(private apiService:ApiService) { }

  ngOnInit() {


    this.getAllSkills();

    

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'number',
      enableCheckAll:true,
      textField: 'skill',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
    //this.model.skills = this.selectedItems.skill;
    for (let i in this.selectedItems) {
      var temp = this.selectedItems[i].skill.concat(","+temp);
      //this.model.skills = this.selectedItems[i].skill;
      console.log(temp);
    }

    this.model.skills = temp;
   
  }
  onSelectAll(items: any) {
    console.log(items);
    console.log(this.selectedItems);
    for (let i in this.selectedItems) {
      this.model.skills = this.selectedItems[i].skill;
      console.log(this.model.skills);
    }
  }

  sendFeedback():void{
    alert(this.model.skills);
    this.apiService.sendFeedback(this.model).subscribe(
      res => {
        //location.reload();
      },
      err=>{
        
      }
      
    );
  }

  public getAllSkills(){
    this.apiService.getAllSkills().subscribe(
      res => {
        this.skills = res;
      },
      err => {
        
      }
    );
  }
}



export interface FeedbackViewModel{
    name:String;
    email:String;
    date:String;
    skills:String;
}
