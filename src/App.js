import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import OurTeam from './components/Pages/OurTeam';
import ContactUs from './components/Pages/ContactUs';
import IntelligentWaterBodiesManagement from './components/Pages/IntelligentWaterBodiesManagement';
import IntelligentAquaBodiesManagement from './components/Pages/IntelligentAquaBodiesManagement';
import IntelligentAquaVerticalFarming from './components/Pages/IntelligentAquaVerticalFarming';
import IntelligentBioflocAquaFarming from './components/Pages/IntelligentBioflocAquaFarming';
import ScrollToTop from './components/ScrollToTop';
import IntelligentWaterbodiesManagementProducts from './components/Pages/IntelligentWaterbodiesManagementProducts';
import IntelligentAquaBodiesManagementProducts from './components/Pages/IntelligentAquaBodiesManagementProducts';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop>
      {/* <Navbar/> */}
      <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path ="/products" component={Products}/>
        <Route path ="/ourteam" component={OurTeam}/>
        <Route path ="/contactus" component={ContactUs}/>
        <Route path = "/IntelligentWaterBodiesManagement" component={IntelligentWaterBodiesManagement}/>
        <Route path = "/IntelligentAquaBodiesManagement" component={IntelligentAquaBodiesManagement}/>
        <Route path = "/IntelligentAquaVerticalFarming" component={IntelligentAquaVerticalFarming}/>
        <Route path = "/IntelligentBioflocAquaFarming" component={IntelligentBioflocAquaFarming}/>
        <Route path = "/IntelligentWaterbodiesManagementProducts" component={IntelligentWaterbodiesManagementProducts}/>
        <Route path = "/IntelligentAquabodiesManagementProducts" component={IntelligentAquaBodiesManagementProducts}/>
      </Switch>
      </ScrollToTop>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
