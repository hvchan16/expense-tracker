import { useParams } from 'react-router-dom';
import EditExpense from '../components/EditExpense';

const EditExpensePage = () => {
    const { id } = useParams<{ id: string }>();
    const expenseId = Number(id);

    return <EditExpense id={expenseId} />;
};

export default EditExpensePage;
