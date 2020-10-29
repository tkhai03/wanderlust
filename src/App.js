import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/pages/Home'
import Destination from './Components/pages/Destination'
import '../src/Components/styles/styles.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Destination' exact component={Destination}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
