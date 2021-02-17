import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.js';
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'

class App extends React.Component {

  render(){
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          {/* <Route path='/hats' component={HatsPage} /> */}
        
        </Switch>
      </div>
    );
  }
}

export default App;
