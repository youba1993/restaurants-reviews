import {Switch , Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddReview from './components/AddReview';
import Login from './components/Login';
import Restaurents from './components/Restaurants';
import RestaurentsList from './components/RestaurentsList';

function App() {
  return (
    <div className="App">
      <AddReview />
      <Login />
      <Restaurents />
      <RestaurentsList />
    </div>
  );
}

export default App;
