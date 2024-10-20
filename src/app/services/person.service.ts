import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private people: Person[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob'},
    { id: 3, name: 'Charlie'}
  ];

  constructor() { }

  getPeople(): Observable<Person[]> {
    return of(this.people);
  }

  addPerson(person: Person): void {
    this.people.push(person);
  }

  // Additional methods like updatePerson, deletePerson can be added here
}
