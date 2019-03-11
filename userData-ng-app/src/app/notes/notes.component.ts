import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Records } from './model/records';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  records: Records[] = [];
  info:Records[] = [];
  selectedRecord:Records[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllRecords();
  }

  public getAllRecords(){
    this.apiService.getAllRecords().subscribe(
      res => {
        this.records = res;
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
      date:"Default"
    };

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
