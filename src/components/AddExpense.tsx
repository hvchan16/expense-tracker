import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/expenseReducer';
import { Expense } from '../types/expenseTypes';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Typeahead } from 'react-bootstrap-typeahead';

const categories = ['Food', 'Transportation', 'Entertainment', 'Health', 'Shopping', 'Utilities', 'Rent', 'Other'];

const AddExpense = () => {
    const dispatch = useDispatch();
    const [expense, setExpense] = useState<Partial<Expense>>({ description: '', amount: 0, category: '', date: new Date() });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (expense.description && expense.amount && expense.category && expense.date) {
            dispatch(addExpense({ ...expense, id: Date.now() } as Expense));
            setExpense({ description: '', amount: 0, category: '', date: new Date() });
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="p-3">
            <Row>
                <Col md={3}>
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
                <Col md={2}>
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
                <Col md={3}>
                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Typeahead
                            id="category"
                            onChange={(selected) => setExpense({ ...expense, category: selected[0] as string || '' })}
                            options={categories}
                            placeholder="Choose a category..."
                            selected={expense.category ? [expense.category] : []}
                            clearButton
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <div className="d-flex align-items-center">
                            <DatePicker
                                selected={expense.date}
                                onChange={(date: Date | null) => setExpense({ ...expense, date: date || new Date() })}
                                className="form-control"
                                dateFormat="MMMM d, yyyy"
                                required
                            />
                        </div>
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit" variant="primary" className="mt-3">Add Expense</Button>
        </Form>
    );
};

export default AddExpense;
