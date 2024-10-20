import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {
  accounts: Account[] = [];
  
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts()
      .subscribe(data => this.accounts = data);
  }
}
