import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exat path="login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
