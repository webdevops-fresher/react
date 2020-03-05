import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/burgerbuilder/BurgerBuilder';
import classes from './App.css';


class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
