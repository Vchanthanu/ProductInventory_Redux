import React from 'react';
import Login from './container/login/Login'
import SignUp from './container/signup/SignUp'
import Product from './container/product/Product'
import Header from './container/header/Header';
import Dashboard from "./container/dashboard/Dashboard";
import AddEditProduct from './container/product/AddEditProduct'
import { Switch, Route } from 'react-router-dom'
import Footer from './container/footer/footer';

function App() {
  return (
    <div >
      <Header />
      <div id="main-content">
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/product' component={Product}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/addeditproduct' component={AddEditProduct}></Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
