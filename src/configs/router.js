import React, { Component } from 'react';
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom'
import FormPage from '../views/FormPage';
import FormPageSecond from '../views/FormPageSecond';

class RouterContainer extends Component {

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FormPage} />
          <Route path="/second" component={FormPageSecond} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default RouterContainer