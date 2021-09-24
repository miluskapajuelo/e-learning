import React from 'react';
import './Login.scss';
import {
  FormControl, InputLabel, Input, Button, Grid, Paper, InputAdornment, Avatar,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AccountCircle } from '@material-ui/icons';
import login from '../../assets/images/login.svg';

const Login = () => (

  <section className="login">
    <article className="login__image">
      <img src={login} alt="login" width="600px" />
    </article>
    <article className="login__container">
      <Paper elevation={5} className="login__content" align="center">
        <Grid className="mg-30">
          <Avatar><LockOutlinedIcon /></Avatar>
          <h1 className="mg-0">APRENDE</h1>
          <h3>Iniciar Sesión</h3>
        </Grid>
        <FormControl variant="standard" style={{ width: 270 }}>
          <InputLabel htmlFor="username">
            Usuario
          </InputLabel>
          <Input
            id="username"
            placeholder="Introduce tu usuario"
            startAdornment={(
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
          )}
          />
        </FormControl>
        <Grid className="mg-24">
          <FormControl style={{ width: 270 }}>
            <InputLabel htmlFor="password">
              Contraseña
            </InputLabel>
            <Input
              id="password"
              placeholder="Introduce tu contraseña"
              fullwidth
              startAdornment={(
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
          )}
            />
          </FormControl>
        </Grid>
        <Grid className="mg-58" style={{ width: 270 }}>
          <Button style={{ padding: 12, width: 270 }} variant="contained">Iniciar sesiòn</Button>
        </Grid>
      </Paper>
    </article>
  </section>
);

export default Login;
