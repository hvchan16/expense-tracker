import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ExpenseSummary = () => {
    const expenses = useSelector((state: RootState) => state.expenses);
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    return (
        <div className="alert alert-info my-3">
            <h4>Total Expenses: ${total.toFixed(2)}</h4>
        </div>
    );
};

export default ExpenseSummary;
