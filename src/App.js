import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.js';
import ShopPage from './pages/shop/Shop'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
import Header from './components/header/Header'

class App extends React.Component {

  render(){
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage} />
        
        </Switch>
      </div>
    );
  }
}

export default App;
