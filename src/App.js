import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import RouterContainer from './configs/router';
import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterContainer />
      </Provider>
    );
  }
}

export default App;
