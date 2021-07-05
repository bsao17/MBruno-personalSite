import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';

//redux & react-redux
import {Provider} from "react-redux"
import {createStore} from "redux";
import darkMode from './reducers/dark.reducer';

const store = createStore(darkMode) 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

