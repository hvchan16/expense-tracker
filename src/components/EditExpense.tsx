import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editExpense } from '../redux/expenseReducer';
import { RootState } from '../redux/store';
import { Expense } from '../types/expenseTypes';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useNavigate } from 'react-router-dom';

const categories = ['Food', 'Transportation', 'Entertainment', 'Health', 'Shopping', 'Utilities', 'Rent', 'Other'];

interface EditExpenseProps {
    id: number;
}

const EditExpense = ({ id }: EditExpenseProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const expenses = useSelector((state: RootState) => state.expenses);
    const expense = expenses.find((expense) => expense.id === id);

    const [formData, setFormData] = useState<Partial<Expense>>({
        description: '',
        amount: 0,
        category: '',
        date: new Date(),
    });

    useEffect(() => {
        if (expense) {
            setFormData(expense);
        }
    }, [expense]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.description && formData.amount && formData.category && formData.date) {
            dispatch(editExpense({ ...formData, id } as Expense));
            navigate('/');
        }
    };

    if (!expense) {
        return <p>Expense not found!</p>;
    }

    return (
        <Form onSubmit={handleSubmit} className="p-3">
            <Row>
                <Col md={3}>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                            value={formData.amount}
                            onChange={(e) => setFormData({ ...formData, amount: +e.target.value })}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Typeahead
                            id="category"
                            onChange={(selected) => setFormData({ ...formData, category: selected[0] as string || '' })}
                            options={categories}
                            placeholder="Choose a category..."
                            selected={formData.category ? [formData.category] : []}
                            clearButton
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <div className="d-flex align-items-center">
                            <DatePicker
                                selected={formData.date}
                                onChange={(date: Date | null) => setFormData({ ...formData, date: date || new Date() })}
                                className="form-control"
                                dateFormat="MMMM d, yyyy"
                                required
                            />
                        </div>
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit" variant="primary" className="mt-3">Save Changes</Button>
        </Form>
    );
};

export default EditExpense;
