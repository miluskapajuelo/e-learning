import React, { useState } from 'react';
import './Login.scss';
import {
  TextField,
  Button,
  Grid,
  Paper,
  InputAdornment,
  Avatar,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AccountCircle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import login from '../../assets/images/login.svg';
import getToken from '../../services/post';
import { AlertSuccess, AlertError } from '../Alerts/Alert';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const account = { user, password };
    if (user !== '' || password !== '') {
      const resp = await getToken(account);
      if (resp.data.status === 200) {
        const { token } = resp.data;
        localStorage.setItem('token', token);
        history.push('/menu');
        setOpenSuccess(true);
      } else {
        setOpenError(true);
      }
    } else {
      setOpenError(true);
    }
  };

  return (
    <>
      <Grid container spacing={4} className="login">
        <AlertError openError={openError} setOpenError={setOpenError} />
        <AlertSuccess openSuccess={openSuccess} setOpenSuccess={setOpenSuccess} />
        <Grid item xs={1} md={7} className="login__image">
          <img src={login} alt="login" width="600px" />
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper elevation={5} className="login__content" align="center">
            <Grid className="mg-30">
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              <h1 className="mg-0">APRENDE</h1>
              <h3>Iniciar Sesión</h3>
            </Grid>
            <Container>
              <Grid
                className="login__form"
                container
                spacing={3}
                component="form"
                autoComplete="off"
                noValidate
              >
                <Grid item xs={12} md={12}>
                  <TextField
                    required
                    id="usuario"
                    label="Usuario"
                    placeholder="Usuario"
                    className="w-100"
                    onChange={(e) => setUser(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    required
                    id="contraseña"
                    type="password"
                    label="Contraseña"
                    placeholder="Contraseña"
                    className="w-100"
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  <Button
                    style={{ padding: 12, width: 270, marginTop: 70 }}
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Iniciar sesiòn
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
