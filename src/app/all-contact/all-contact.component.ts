import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent  implements OnInit{

  // to hold all contacts
  allContacts:any=[]
  loginDetails:any ;
  searchKey:string=''

  constructor (private api:ApiService){

  }
ngOnInit(): void {
  // get all contacts 
  this.getAllContacts()
  
}
getAllContacts(){
  // api call to get all contacts
  this.api.allContacts().
  subscribe((result:any)=>{
    // result is all contact array from api
    console.log(result);
    this.allContacts=result
    
  })
}
// for delete
deleteContact(contactId:any){
  this.api.deleteContact(contactId)
  .subscribe((data:any)=>{
    this.getAllContacts()                                    
  })
}
}
 