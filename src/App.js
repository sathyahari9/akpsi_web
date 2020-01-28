import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Menu from './Menu';
import Home from './Home';
import Brothers from './Brothers';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu>
        </Menu>
        <Switch>
          <Route path="/brothers">
            <Brothers></Brothers>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
