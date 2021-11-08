import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import OurTeam from './components/Pages/OurTeam';
import ContactUs from './components/Pages/ContactUs';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path ="/products" component={Products}/>
        <Route path ="/ourteam" component={OurTeam}/>
        <Route path ="/contactus" component={ContactUs}/>
      </Switch>
      <Footer/>

    </Router>
    </>
  );
}

export default App;
