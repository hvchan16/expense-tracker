export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: Date;
}

export interface ExpenseState {
  expenses: Expense[];
}

export interface AddExpenseAction {
  type: "ADD_EXPENSE";
  payload: Expense;
}

export interface DeleteExpenseAction {
  type: "DELETE_EXPENSE";
  payload: number;
}

export interface EditExpenseAction {
  type: "EDIT_EXPENSE";
  payload: Expense;
}

export type ExpenseActionTypes =
  | AddExpenseAction
  | DeleteExpenseAction
  | EditExpenseAction;
