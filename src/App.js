import React, { Component } from 'react';

//  import {Route, Switch,withRouter} from 'react-router-dom'
//  import {Redirect} from 'react-router-dom'
import './App.css';
import SignUp from './components/Signup/Signup';

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
      <SignUp/>
      </div>
  );
  }
}

export default App;
