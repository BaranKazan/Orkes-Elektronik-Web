import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

class App extends Component {

  render() {
    const options = {
      timeout: 5000,
      position: positions.BOTTOM_CENTER
    };
    return (
      <div className="App">
        <Provider template={AlertTemplate} {...options}>
          <Header />
          <About />
          <Contact />
          <Footer />
        </Provider>
      </div>
    );
  }
}

export default App;
