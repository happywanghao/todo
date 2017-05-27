import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import store from './redux/store.js'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
  }
}

export default App;
