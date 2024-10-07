import ExpenseList from '../components/ExpenseList';
import Dashboard from '../components/Dashboard';
import ExpenseSummary from '../components/ExpenseSummary';

const HomePage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseList />
        <Dashboard />
    </div>
);

export default HomePage;
