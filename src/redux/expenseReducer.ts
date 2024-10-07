import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "../types/expenseTypes";

const initialState: Expense[] = JSON.parse(
  localStorage.getItem("expenses") || "[]"
);

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.push(action.payload);
      localStorage.setItem("expenses", JSON.stringify(state));
    },
    deleteExpense: (state, action: PayloadAction<number>) => {
      const updatedState = state.filter(
        (expense) => expense.id !== action.payload
      );
      localStorage.setItem("expenses", JSON.stringify(updatedState)); // Update local storage
      return updatedState; // Return new state
    },
    editExpense: (state, action: PayloadAction<Expense>) => {
      const index = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      if (index !== -1) state[index] = action.payload;
      localStorage.setItem("expenses", JSON.stringify(state));
    },
  },
});

export const { addExpense, deleteExpense, editExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
