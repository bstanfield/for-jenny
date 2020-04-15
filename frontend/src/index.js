import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Route, BrowserRouter as Router, } from 'react-router-dom';
import Users from './routes/Users';
import RoleModels from './routes/RoleModels';
import Home from './routes/Home';

ReactDOM.render(
  <Router>
    <Route
      exact
      path="/"
      render={() => (
        <App>
          <Home />
        </App>
      )}
    />
    <Route
      exact
      path="/role-models"
      render={() => (
        <App>
          <RoleModels />
        </App>
      )}
    />
        <Route
      exact
      path="/users"
      render={() => (
        <App>
          <Users />
        </App>
      )}
    />
  </Router>
  ,
  document.getElementById('root')
);
