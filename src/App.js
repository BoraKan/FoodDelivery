import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Register from './component/register/register';
import Login from './component/login/login';
import Home from './component/Dashboard/home/home.js';
import Cart from './component/Dashboard/cart/cart';
import Singledish from './component/Dashboard/home/categories/singledish';
import Alldish from './component/Dashboard/All dish/alldish';
import Profile from './component/Dashboard/profile/profile';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getTotals } from './component/Dashboard/cart/cartslice';

// Yeni component'ler
import Categories from './component/Dashboard/home/categories/categories.js';
import TurkishFood from './component/Dashboard/home/categories/TurkishFood/TurkishFood.js';
import Burger from './component/Dashboard/home/categories/Burger/Burger.js';
import Pizza from './component/Dashboard/home/categories/Pizza/Pizza.js';
import RestaurantMenu from './component/Dashboard/restaurants/RestaurantMenu.js';
import Header from './component/Dashboard/header/header';

store.dispatch(getTotals());

function AppWrapper() {
  const location = useLocation();
  const hideHeaderRoutes = ['/', '/login'];

  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {shouldShowHeader && <Header />}
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/singledish' component={Singledish} />
        <Route path='/alldish' component={Alldish} />
        <Route path='/profile' component={Profile} />
        <Route path='/categories/turkishfood' component={TurkishFood} />
        <Route path='/categories/burger' component={Burger} />
        <Route path='/categories/pizza' component={Pizza} />
        <Route path='/categories' component={Categories} />
        <Route path='/menu/:id' component={RestaurantMenu} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
