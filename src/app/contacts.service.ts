import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }
  getContacts() {
    return this.http.get('https://thecontactsdb.herokuapp.com/contacts').map(res => res.json())
  }
}
