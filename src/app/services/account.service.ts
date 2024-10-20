import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: Account[] = [
    { id: 1, name: 'Checking Account', balance: 1500, type: 'checking' },
    { id: 2, name: 'Savings Account', balance: 5000, type: 'savings' }
  ];

  constructor() { }

  getAccounts(): Observable<Account[]> {
    return of(this.accounts);
  }

  addAccount(account: Account): void {
    this.accounts.push(account);
  }

  // Additional methods like updateAccount, deleteAccount can be added here
}
