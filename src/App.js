import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import MainNavbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { HashRouter, Route } from 'react-router-dom';
import projects from "./projects.json";

// State management:
class App extends Component {
    state = {
      projects
    };

render() {
  return (
    <HashRouter>
      <div>
        <MainNavbar/>
        <Route exact path="/" component= {About} />,
        <Route exact path="/contact" component= {Contact} />,
        <Route exact path="/portfolio" component= {Portfolio} />
        <Footer/>
      </div>
    </HashRouter>
  );
}
}

export default App;
