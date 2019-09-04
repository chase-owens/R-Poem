import React, { Fragment } from 'react';
import './App.css';
import 'semantic-ui/dist/semantic.min.css';
import LiteraturePage from './routes/LiteraturePage';
import { Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <Fragment>
      <Route exact path='/' render={() => <Dashboard />} />
      <Route exact path='/Literature' render={() => <LiteraturePage />} />
      <Route exact path='/Reconstruct' render={() => <LiteraturePage />} />
    </Fragment>
  );
}

export default App;
