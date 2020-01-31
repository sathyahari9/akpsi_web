import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Brothers from './Pages/Brothers';
import About from './Pages/About';

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
