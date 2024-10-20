import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit {
  people: Person[] = [];
  newPerson: Person = { id: 0, name: ''};

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  onSubmit(): void {
    // Generate a unique id for the new person
    const newId = this.people.length ? Math.max(...this.people.map(person => person.id)) + 1 : 1;
    const personToAdd = { ...this.newPerson, id: newId };

    this.personService.addPerson(personToAdd);
    this.newPerson = { id: 0, name: ''}; // Reset the form
  }
}
