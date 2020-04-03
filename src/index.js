import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Login from './Login';
import About from './About';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/" render={() => <h1>Home!</h1>} /> */}
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </>
  </Router>,
  document.getElementById('root')
);
