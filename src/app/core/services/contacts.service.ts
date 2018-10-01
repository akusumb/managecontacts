import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Contact } from '@app-core/models';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {

  static contacts:Contact[];
  private contactsUrl = 'api/contacts';

  constructor(private http: HttpClient ) { 
    ContactsService.contacts = [];
  }
  

  index(): Observable<Contact[]> {
    return this.http
        .get<Contact[]>(`${this.contactsUrl}`);

  }

  show(conactId: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.contactsUrl}/${conactId}`);
  }

  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.contactsUrl}`, contact);   
  }

  update(contact: Contact): Observable<Contact> {
    return this.http.patch<Contact>(`${this.contactsUrl}/${contact.id}`, contact);
  }


  destroy(id: number): Observable<Contact> {
    return this.http.delete<Contact>(`${this.contactsUrl}/${id}`);
  }

}
