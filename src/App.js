import React, {Component} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerKing from './containers/BurgerKing/BurgerKing';
import Checkout from "./containers/Checkout/Checkout";

class App extends Component{
  render() {
    return (
        <div>
          <Layout>
            <BurgerKing/>
            <Checkout/>
          </Layout>
        </div>
    );
  }
}

export default App;
