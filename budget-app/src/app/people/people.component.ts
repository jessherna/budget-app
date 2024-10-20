import { Component } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  people: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getPersons().subscribe(data => {
      this.people = data;
    });
  }
}
