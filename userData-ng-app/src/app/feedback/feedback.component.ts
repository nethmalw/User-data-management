import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  skills = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  model:FeedbackViewModel = {

    name:'',
    email:'',
    date:''

  };
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.skills = [
      {item_id:1,item_text:'Riding'},
      {item_id:2,item_text:'Boating'}
    ];

    this.selectedItems = [
      
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
    console.log(this.selectedItems);
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
}

export interface FeedbackViewModel{
    name:String;
    email:String;
    date:String;
}
