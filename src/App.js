import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exat path="login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
