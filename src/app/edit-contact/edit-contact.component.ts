import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactId:string=''
  contacts:MyContact={}  //to store data of editing id for view in html  Mycontact is modal
  allGroup:any=''
  constructor(private editContactActivatedRoute:ActivatedRoute,private api:ApiService,private EditRouter:Router){

}


ngOnInit(): void {
  // to get path parameter from url
  this.editContactActivatedRoute.params
  .subscribe((data:any)=>{
    this.contactId=data.id
    console.log(this.contactId);
    
  })
  this.api.viewContact(this.contactId)
.subscribe((result:any)=>{
this.contacts=result
console.log(this.contacts);

})
  this.api.allGroups()
.subscribe((group:any)=>{
  console.log(group);
  this.allGroup=group
  
})



}
// to update existing contact

editContact(contacts:MyContact){
  this.api.updateContact(this.contactId,contacts)
  .subscribe((result:any)=>{
    console.log(result);
    
    alert('Updated Successfully....!')
    this.EditRouter.navigateByUrl('')
  })
}

 
}

