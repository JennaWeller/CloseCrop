import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/Home/Home';
import Crops from './pages/Crops/Crops';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import FruitOfferings from './pages/Fruit/Fruit';
import HoneyOfferings from './pages/Honey/Honey';
import nuts from './pages/Nuts/Nuts';
import VeggieOfferings from './pages/Veggies/Veggies';
import EggOfferings from './pages/Eggs/Eggs';
import Subscribe from './pages/Subscribe/Subscribe';
import BecomeVendor from './pages/BecomeVendor/BecomeVendor';
import ExploreProduce from './pages/ExploreProduce/ExploreProduce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Crops' component={Crops} />
        <Route path='/products' component={Products} />
        <Route path='/placeOrder' component={PlaceOrder} />
        <Route path="/fruit" component={FruitOfferings}/>
        <Route path="/honey" component={HoneyOfferings}/>
        <Route path="/nuts" component={nuts}/>
        <Route path="/veggies" component={VeggieOfferings}/>
        <Route path="/eggs" component={EggOfferings}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/subscribe" component={Subscribe}/>
        <Route path="/becomeVendor" component={BecomeVendor}/>
        <Route path="/exploreProduce" component={ExploreProduce}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
