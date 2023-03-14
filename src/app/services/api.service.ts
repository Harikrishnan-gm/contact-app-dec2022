import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyContact } from 'src/models/mycontact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http:HttpClient) { }
  // all contacts- to get  all contact data from api
  allContacts(){
    // http request to get all contacts
    return this.http.get('http://localhost:3000/contacts')
  }
  // api to get particular data
  viewContact(contactId:string){
   return this.http.get('http://localhost:3000/contacts/'+contactId)
  }
  viewContactGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId )
  }
  // api call to get all groups
  allGroups(){
    return this.http.get('http://localhost:3000/groups/')
  }
  // Api call to add new contact details to api
  addContact(contact:any){
    return this.http.post('http://localhost:3000/contacts',contact)
  }
  // api call to delete contact
  deleteContact(contactId:any){
    return this.http.delete('http://localhost:3000/contacts/'+contactId)
  }
  // api call to update existing contact
  updateContact(contactId:string,contactBody:any){
   return this.http.put('http://localhost:3000/contacts/'+contactId,contactBody)
  }
}
