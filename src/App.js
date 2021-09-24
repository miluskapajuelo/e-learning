import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Menu} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
