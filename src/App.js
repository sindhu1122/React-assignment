import React, { Component } from 'react';
import Input from './components/input'
import Signup from './components/Signup/Signup'
//  import {Route, Switch,withRouter} from 'react-router-dom'
//  import {Redirect} from 'react-router-dom'
import './App.css';

class App extends Component {
  render()
  {
  //   let routes = (
  //   <Switch>
  //     <Route path="/user" component={Input} />
  //     <Route path="/" exact component={Signup} />
  //     <Redirect to="/" />
  // </Switch>)

  return (
    <div className="App">
      <Signup/>
      </div>
  );
  }
}

export default App;
