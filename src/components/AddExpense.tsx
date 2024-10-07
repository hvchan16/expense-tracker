import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/expenseReducer';
import { Expense } from '../types/expenseTypes';
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddExpense = () => {
    const dispatch = useDispatch();
    const [expense, setExpense] = useState<Partial<Expense>>({ description: '', amount: 0, category: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (expense.description && expense.amount && expense.category) {
            dispatch(addExpense({ ...expense, id: Date.now() } as Expense));
            setExpense({ description: '', amount: 0, category: '' });
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="p-3">
            <Row>
                <Col md={4}>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Description"
                            value={expense.description}
                            onChange={(e) => setExpense({ ...expense, description: e.target.value })}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Amount"
                            value={expense.amount}
                            onChange={(e) => setExpense({ ...expense, amount: +e.target.value })}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Category"
                            value={expense.category}
                            onChange={(e) => setExpense({ ...expense, category: e.target.value })}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit" variant="primary" className="mt-3">Add Expense</Button>
        </Form>
    );
};

export default AddExpense;
