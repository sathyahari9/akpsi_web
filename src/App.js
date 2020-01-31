import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Menu from './Menu';
import Footer from './Footer';
import Home from './Home';
import Brothers from './Brothers';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu>
        </Menu>
        <Switch>
          <Route path="/brothers" component = {Brothers}/>
          <Route path="/about" component = {About}/>
          <Route path="/" component = {Home}/>
        </Switch>
        <Footer>
        </Footer>
      </div>
    </Router>
  );
}

export default App;
