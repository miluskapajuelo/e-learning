import React, { useState } from 'react';
import './NewCourse.scss';
import {
  Typography, Step, StepLabel, Stepper, Paper, TextField, Grid, InputAdornment, Button,
} from '@material-ui/core';
import { InsertPhoto, Menu } from '@material-ui/icons';
import Sidebar from '../Sidebar/Sidebar';
import CardCourse from '../CardCourse/CardCourse';
import steps from '../../utils.js/functions';

const NewCourse = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const onClickHandler = () => {
    setOpenSidebar(true);
  };

  return (
    <section className="section">
      <article>
        <div className="section__header">
          <div
            className="section__menu"
            role="button"
            tabIndex={0}
            onMouseDown={onClickHandler}
          >
            <Typography gutterBottom variant="h4" component="div">
              Crear curso
            </Typography>
            <div className="section__menu--burger">
              <Menu />
              {' '}
              <p>Menu</p>
            </div>
          </div>
        </div>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </article>
      <article>
        <Paper elevation={3} className="section__stepBox" align="center">
          <Stepper>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
        <Paper elevation={3} className="section__stepBox--movil" align="center">
          <Stepper>
            <Step key={steps[0]}>
              <StepLabel>{steps[0]}</StepLabel>
            </Step>
          </Stepper>
        </Paper>
      </article>
      <Grid
        container
        spacing={2}
        component="div"
      >
        <Grid item xs={12} md={3}>
          <CardCourse />
        </Grid>
        <Grid item xs={12} md={9} mt={2}>
          <Grid
            container
            spacing={2}
            component="form"
            autoComplete="off"
          >
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="nombre"
                label="Nombre del curso"
                placeholder="Nombre del curso"
                helperText="120 caracteres disponibles"
                className="w-100"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                required
                multiline
                id="resumen"
                label="Resumen del curso"
                placeholder="Resumen del curso"
                helperText="260 caracteres disponibles"
                className="w-100 "
                rows={4}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="image"
                label="Imagen del card"
                placeholder="Imagen del card"
                className="w-100"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <InsertPhoto />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                required
                id="Nombre"
                label="Nombre del curso"
                placeholder="Nombre del curso"
                helperText="120 caracteres disponibles"
                className="w-30"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                required
                id="Nombre"
                label="Nombre del curso"
                placeholder="Nombre del curso"
                helperText="120 caracteres disponibles"
                className="w-30"
              />
            </Grid>
            <Grid item xs={12} md={12} style={{ textAlign: 'end' }}>
              <Button style={{ padding: 12, width: 200 }} variant="contained">Guardar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default NewCourse;
