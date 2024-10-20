import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../models/budget.model';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent implements OnInit {
  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService) {}

  ngOnInit() {
    this.budgetService.getBudgets().subscribe(data => {
      this.budgets = data;
    });
  }

}
