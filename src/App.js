import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Problem1 from './pages/Problem1';
import Problem2 from './pages/Problem2';
import Problem3 from './pages/Problem3';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render={ props => (<Problem1 {...props} />) }></Route>
          <Route path="/problem-1" exact render={ props => (<Problem1 {...props} />) }></Route>
          <Route path="/problem-2" exact render={ props => (<Problem2 {...props} />) }></Route>
          <Route path="/problem-3" exact render={ props => (<Problem3 {...props} />) }></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;