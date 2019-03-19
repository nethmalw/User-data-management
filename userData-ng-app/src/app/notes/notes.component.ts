import { Component, OnInit } from '@angular/core';
import { Records } from './model/records';
import { ApiService } from '../shared/api.service';
import { SkillRecords } from '../skills/model/records';
import { FeedbackViewModel } from '../feedback/feedback.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  records: Records[] = [];
  info:Records[] = [];
  selectedRecord:Records[] = [];
  skills:SkillRecords[] = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(private apiService: ApiService) { }

  model:FeedbackViewModel = {

    name:'',
    email:'',
    date:'',
    multipleSkills:[]

  };
  ngOnInit() {
    this.getAllRecords();
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

  public getAllRecords(){
    this.apiService.getAllRecords().subscribe(
      res => {
        this.records = res;
        
        for(let i=0; i<this.records.length; i++){
          console.log(this.records[i].multipleSkills);
          
          this.selectedItems[i] = this.records[i].multipleSkills;
          console.log("Selected:");
          console.log(this.selectedItems[i]);
        }
      },
      err => {
        
      }
    );
  }

  addRecord(){
    let newRecord:Records = {
      userId:"",
      email:"Default",
      name:"Default",
      date:"Default",
      multipleSkills:[]
    };
    //let newRecord:Records;
    this.apiService.sendFeedback(newRecord).subscribe(
      res=>{
        newRecord.userId = res.userId;
        this.records.push(newRecord);
      },
      err=>{}
    );
    
  }

  updateRecord(updatedRecords: Records){

      this.apiService.postRecord(updatedRecords.userId,updatedRecords).subscribe(
        res => {
          updatedRecords.userId = res.userId;
          this.records.push(updatedRecords);
        }
      );
  }

  deleteRecord(deleteRecord:Records){
    if(confirm("Are you sure you want to delete the record?")){
      this.apiService.deleteRecord(deleteRecord.userId).subscribe(
        res=>{
          let index = this.records.indexOf(deleteRecord);
          this.records.splice(index,1);
        }
      )
    }
  }

  getAllInfo(){
    this.apiService.getAllInfo().subscribe(
      res=>{
        this.info = res;
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

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
    this.selectedItems.push(item);
    this.model.multipleSkills = this.selectedItems;
   
  }
  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
    this.selectedItems.splice(item,1);
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

  /*selectRecord(selected:Records){
    this.selectedRecord = selected;
    this.apiService.getInfoById(selected.userId).subscribe(
      res=>{
        this.selectRecord = res;
        
      },
      err=>{}
    );
  }*/

}
