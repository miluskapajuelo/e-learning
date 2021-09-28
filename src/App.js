import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import NewCourse from './components/NewCourse/NewCourse';
import ModalVideo from './components/ModalVideo/ModalVideo';
import './global.scss';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette:{
    primary:{
      main: '#ED06B2'
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Route path="/login" component={Login} />
          <Route path="/menu" component={Menu} />
          <Route path="/create" component={NewCourse} />
          <Route path="/video" component={ModalVideo} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
