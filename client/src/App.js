import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './Pages/NoMatch';
import Home from './Pages/Home';
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";

const App = () => (
  <Router>
    <div>
      <Jumbotron>
        <h1>New Yort Times Articles Scrubber</h1>
      </Jumbotron>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component = {NoMatch} />
      </Switch>
    </div>
  </Router>
);


export default App;
