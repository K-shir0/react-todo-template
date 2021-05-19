import React, { VFC } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import TodoList from './components/templates/todo/TodoList';

const App: VFC = () => (
  <div className="container">
    <Switch>
      {/* <Route path="/" component={Index} /> */}
      <Route path="/" component={TodoList} />
    </Switch>
  </div>
);

export default App;
