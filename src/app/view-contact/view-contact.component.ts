import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId:string=''  //used for store activated route data to all the class
  contact:any={}
  groupId:any=''   //used for store groupid
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){

  }

  ngOnInit(): void {
    // to get path parameter from url
    this.activatedRoute.params.subscribe((data:any)=>{
      this.contactId=data.id
      console.log(this.contactId);
  })
  // to get details of particular 
  this.api.viewContact(this.contactId)
  .subscribe((result:any)=>{
    console.log(result);
    this.contact=result
    this.groupId=this.contact.groupId
    console.log(this.groupId);
  this.api.viewContactGroupName(this.groupId)
  .subscribe((data)=>{
    console.log(data);
     this.groupId=data
  })  
    
  })
  
  }
}
