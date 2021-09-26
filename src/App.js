import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import NewCourse from './components/NewCourse/NewCourse';
import './global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/login" exact component={Login} />
        <Route path="/create" component={NewCourse} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
