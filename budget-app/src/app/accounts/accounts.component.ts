import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];
  newAccount: Account = { id: 0, name: '', balance: 0, type: 'checking' };
  
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts()
      .subscribe(data => this.accounts = data);
  }

  onSubmit(): void {
    // Generate a unique id for the new account
    const newId = this.accounts.length ? Math.max(...this.accounts.map(acc => acc.id)) + 1 : 1;
    const accountToAdd = { ...this.newAccount, id: newId };

    this.accountService.addAccount(accountToAdd);
    this.newAccount = { id: 0, name: '', balance: 0, type: 'checking' }; // Reset the form
  }
}