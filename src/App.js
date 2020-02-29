import React, {Component} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerKing from './containers/BurgerKing/BurgerKing';

class App extends Component{
  render() {
    return (
        <div>
          <Layout>
            <BurgerKing/>
          </Layout>
        </div>
    );
  }
}

export default App;
