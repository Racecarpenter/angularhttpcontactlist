import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  contacts = []

  constructor(private contactService: ContactsService) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts)
  }
}
