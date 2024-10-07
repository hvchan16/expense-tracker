import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

const Dashboard = () => {
    const expenses = useSelector((state: RootState) => state.expenses);


    const categories = expenses.reduce<Record<string, number>>((acc, expense) => {
        const { category, amount } = expense;
        acc[category] = (acc[category] || 0) + amount;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(categories),
        datasets: [
            {
                data: Object.values(categories),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return (
        <div className="text-center my-4">
            <h2>Expense Dashboard</h2>
            <div className="chart-container" style={{ maxWidth: '400px', margin: '0 auto' }}>
                <Pie data={data} />
            </div>
        </div>
    );
};

export default Dashboard;
