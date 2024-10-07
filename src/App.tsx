import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import store from './redux/store';
import HomePage from './pages/HomePage';
import AddExpensePage from './pages/AddExpensePage';
import EditExpensePage from './pages/EditExpensePage';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Home
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Container>
          <Row className="my-4 align-items-center">
            <Col>
              <h1>Personal Expense Tracker</h1>
            </Col>
          </Row>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddExpensePage />} />
            <Route path="/edit/:id" element={<EditExpensePage />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
