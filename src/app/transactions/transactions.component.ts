import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';
import { AccountService } from '../services/account.service';
import { PersonService } from '../services/person.service';
import { Transaction } from '../models/transaction.model';
import { Account } from '../models/account.model';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  accounts: Account[] = [];
  people: Person[] = [];
  newTransaction: Transaction = { id: 0, description: '', amount: 0, date: new Date(), personId: 0, accountId: 0 };

  constructor(private transactionService: TransactionService, private accountService: AccountService, private personService: PersonService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(accounts => this.accounts = accounts);
    this.personService.getPeople().subscribe(people => this.people = people);
  }

  onSubmit(): void {
    this.transactionService.getTransactions().subscribe(transactions => {
      const newId = Math.max(...transactions.map((t: Transaction) => t.id)) + 1;
      const transactionToAdd = { ...this.newTransaction, id: newId };

      this.transactionService.addTransaction(transactionToAdd);
      this.newTransaction = { id: 0, description: '', amount: 0, date: new Date(), personId: 0, accountId: 0 }; // Reset form
    });
  }
}