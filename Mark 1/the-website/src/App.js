import React from 'react';
import './App.css';
import Home from './module/Home'
import NavBar from './module/NavBar'
import ContactUs from './module/ContactUs'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
