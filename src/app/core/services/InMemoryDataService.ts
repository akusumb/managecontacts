import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from '../models/contact'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 1, name: 'Mr. Nice',email:'nice@gmail.com',phone:'1234567890'},
      { id: 2, name: 'Mr. Nice1',email:'nice1@gmail.com',phone:'2345678901'},
      { id: 3, name: 'Mr. Nice2',email:'nice2@gmail.com',phone:'3456789012'}
    ];
    return {contacts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(contacts: Contact[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/