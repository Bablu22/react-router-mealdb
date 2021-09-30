import './App.css';
import "@material-tailwind/react/tailwind.css";
import Home from './Componants/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Account from './Componants/Account/Account';
import Header from './Componants/Header/Header';
import FoodDetails from './Componants/FoodDetails/FoodDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/account">
            <Header></Header>
            <Account></Account>
          </Route>
          <Route path="/food/:foodId">
            <Header></Header>
            <FoodDetails></FoodDetails>
          </Route>
          <Route path="/food">
            <Header></Header>
            <FoodDetails></FoodDetails>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
