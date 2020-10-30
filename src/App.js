import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Register from './Components/pages/Register'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/pages/Home'
import Destination from './Components/pages/Destination'
import Dashboard from './Components/pages/Dashboard'
import '../src/Components/styles/styles.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Destination' exact component={Destination} />
          <Route path='/Dashboard' exact component={Dashboard} />
          <Route path='/Register' exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
