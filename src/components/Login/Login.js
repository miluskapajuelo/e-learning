import React from 'react';
import './Login.scss';
import {
  Container, FormControl, InputLabel, Input, FormHelperText, Button, Grid, Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '60%',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      width: '100%',
      weidth: '100%',
    },
  },
}));
const Login = () => (

  <Grid container className="login">
    <Container component={Paper} elevation={5} midWith="xs">
      <Grid item={12}>
        <FormControl>
          <InputLabel htmlFor="text">Username</InputLabel>
          <Input id="username" type="text" aria-describedby="emailHelper" />
          <FormHelperText id="emailHelper">Rol que desempeña</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item={12}>
        <FormControl>
          <InputLabel htmlFor="pwd">Password</InputLabel>
          <Input id="password" type="password" aria-describedby="passwordHelper" />
          <FormHelperText id="passwordHelper">Entre 8 y 16 caracteres</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item={12}>
        <Button variant="contained">Iniciar sesiòn</Button>
      </Grid>
    </Container>
  </Grid>
);

export default Login;
