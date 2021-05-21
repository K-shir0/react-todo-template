import React, { VFC } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Tasks from './components/pages/Tasks';

const App: VFC = () => (
  <div className="container">
    <Switch>
      {/* <Route path="/" component={Index} /> */}
      <Route path="/" component={Tasks} />
    </Switch>
  </div>
);

export default App;
