import { Injectable } from '@angular/core';
import { Budget } from '../models/budget.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private budgets: Budget[] = [
    { id: 1, category: 'Groceries', amount: 500, actual: 450, month: 'January' },
    { id: 2, category: 'Rent', amount: 1000, actual: 1000, month: 'January' },
    { id: 3, category: 'Utilities', amount: 200, actual: 180, month: 'January' }
  ];

  constructor() { }

  getBudgets(): Observable<Budget[]> {
    return of(this.budgets);
  }

  addBudget(budget: Budget): void {
    this.budgets.push(budget);
  }

  // Additional methods like updateBudget, deleteBudget can be added here

}
