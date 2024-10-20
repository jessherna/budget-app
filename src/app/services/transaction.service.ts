import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [
    { id: 1, description: 'Salary', amount: 5000, date: new Date(), accountId: 1, personId: 1 },
    { id: 2, description: 'Rent', amount: -1000, date: new Date(), accountId: 1, personId: 2 },
    { id: 3, description: 'Groceries', amount: -200, date: new Date(), accountId: 1, personId: 3 }
  ];

  constructor() { }

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactions);
  }

  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  // Additional methods like updateTransaction, deleteTransaction can be added here
}
