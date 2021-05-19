import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Index from './components/templates';

const App = () => (
  <div className="container">
    <Switch>
      <Route path="/" component={Index} />
    </Switch>
  </div>
);

export default App;
