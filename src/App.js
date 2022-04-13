import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/Home/Home';
import Cakes from './pages/Cakes/Cakes';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
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
        <Route path='/Cakes' component={Cakes} />
        <Route path='/products' component={Products} />
        <Route path='/placeOrder' component={PlaceOrder} />
      
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
/*<Route path="/cart" component={Cart}/>*/