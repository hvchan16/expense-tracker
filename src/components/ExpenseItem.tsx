import { useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/expenseReducer';
import { Expense } from '../types/expenseTypes';
import { Button, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface ExpenseItemProps {
    expense: Expense;
}

const ExpenseItem = ({ expense }: ExpenseItemProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deleteExpense(expense.id));
    };

    const handleEdit = () => {
        navigate(`/edit/${expense.id}`);
    };

    return (
        <ListGroupItem className="d-flex justify-content-between align-items-center">
            <div>
                <span>{expense.description} - ${expense.amount} ({expense.category})</span>
                <br />
                <small className="text-muted">
                    Date: {expense.date ? new Date(expense.date).toLocaleDateString() : 'N/A'}
                </small>
            </div>
            <div>
                <Button variant="warning" onClick={handleEdit} className="me-2">Edit</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </div>
        </ListGroupItem>
    );
};

export default ExpenseItem;
