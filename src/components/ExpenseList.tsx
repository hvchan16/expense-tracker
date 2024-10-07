import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ExpenseItem from './ExpenseItem';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ExpenseList = () => {
    const expenses = useSelector((state: RootState) => state.expenses);
    const navigate = useNavigate();

    const handleAddExpense = () => {
        navigate('/add');
    };

    return (
        <div className="my-4">
            <Row className="align-items-center mb-3">
                <Col>
                    <h2>Expense List</h2>
                </Col>
                <Col className="text-end">
                    <Button variant="primary" onClick={handleAddExpense}>
                        Add Expense
                    </Button>
                </Col>
            </Row>
            <ListGroup key={expenses.length}>
                {expenses.map((expense) => (
                    <ExpenseItem key={expense.id} expense={expense} />
                ))}
            </ListGroup>
        </div>
    );
};

export default ExpenseList;
