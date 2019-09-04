import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from './store/history';
import * as serviceWorker from './serviceWorker';
import { poemStore } from './store/PoemStore';
import { authState } from './store/AuthState';
import App from './App';
import './index.css';

export const GlobalState = React.createContext(poemStore);
export const AuthState = React.createContext(authState);

ReactDOM.render(
  <Router history={history}>
    <GlobalState.Provider value={poemStore}>
      <AuthState.Provider value={authState}>
        <App />
      </AuthState.Provider>
    </GlobalState.Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
