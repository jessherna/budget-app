import { Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BudgetComponent } from './budget/budget.component';
import { InsightsComponent } from './insights/insights.component';
import { PeopleComponent } from './people/people.component';


export const routes: Routes = [
    { path: 'accounts', component: AccountsComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'budget', component: BudgetComponent },
    { path: 'insights', component: InsightsComponent },
    { path: 'people', component: PeopleComponent },
    { path: '', redirectTo: '/accounts', pathMatch: 'full' },
];
