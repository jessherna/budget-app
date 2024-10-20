import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../models/budget.model';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent implements OnInit {
  budgets: Budget[] = [];
  newBudget: Budget = { id: 0, category: '', amount: 0, actual: 0, month: ''};

  constructor(private budgetService: BudgetService) {}

  ngOnInit() {
    this.budgetService.getBudgets().subscribe(data => {
      this.budgets = data;
    });
  }

  onSubmit(): void {
    // Generate a unique id for the new budget
    const newId = this.budgets.length ? Math.max(...this.budgets.map(budget => budget.id)) + 1 : 1;
    const budgetToAdd = { ...this.newBudget, id: newId };

    this.budgetService.addBudget(budgetToAdd);
    this.newBudget = { id: 0, category: '', amount: 0, actual: 0, month: '' };
  }

}
