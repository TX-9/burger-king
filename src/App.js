import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerKing from './containers/BurgerKing/BurgerKing';
import Checkout from "./containers/Checkout/Checkout";

class App extends Component{
  render() {
    return (
        <div>
          <Layout>
              <Switch>
                  <Route path="/checkout" component={Checkout}/>
                  <Route path="/" exact component={BurgerKing}/>
              </Switch>
          </Layout>
        </div>
    );
  }
}

export default App;
