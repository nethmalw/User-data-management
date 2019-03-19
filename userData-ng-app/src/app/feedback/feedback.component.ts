import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { SkillRecords } from '../skills/model/records';

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
  

  model:FeedbackViewModel = {
    userId:'-1',
    name:'',
    email:'',
    date:'',
    multipleSkills:[]

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
    this.model.multipleSkills = this.selectedItems;
  }
  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
    this.selectedItems.splice(item);
    this.model.multipleSkills = this.selectedItems;
  }
  onSelectAll(items: any) {
    console.log(items);
    console.log(this.selectedItems);
    this.model.multipleSkills = this.selectedItems;
  }
  onDeSelectAll(items: any){
    console.log(items);
    this.selectedItems = [];
    this.model.multipleSkills = this.selectedItems;
  }

  sendFeedback():void{
    
    this.apiService.sendFeedback(this.model).subscribe(
      res => {
        location.reload();
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



export class FeedbackViewModel{
    userId:String;
    name:String;
    email:String;
    date:String;
    multipleSkills:{number:number,skill:String}[];
}

  
