import React, { useState } from 'react';
import './CardCourse.scss';
import {
  Card, CardActions, CardContent, CardMedia, Button, Typography, Rating, LinearProgress,
} from '@material-ui/core';

const CardCourse = ({ course, state }) => {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(60);

  const ratingChange = (event, newValue) => {
    setValue(newValue);
    setProgress(60);
  };
  return (
    <section>
      { course !== undefined
        ? (
          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
              component="img"
              alt="imagen"
              height="140"
              image={course.data.imagen}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {course.data.nombre}
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={ratingChange}
              />
              <Typography variant="body2" color="text.secondary">
                {course.data.resumen}
              </Typography>
              <br />
              <LinearProgress variant="determinate" value={progress} />
              <Typography variant="body1" color="text.primary" mt={2}>
                {progress}
                % completada
              </Typography>
              <Typography variant="body2" color="text.primary">
                {course.data.unidad}
                {' '}
                unidades |
                {course.data.horas}
                {' '}
                horas
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button style={{ padding: 8, width: 160 }} variant="contained">INGRESAR</Button>
            </CardActions>
            <br />
          </Card>
        ) : (
          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
              component="img"
              alt="Coloca aquí una imagen 🥳"
              height="140"
              image={state.imagen}
            />
            <CardContent>
              <Typography variant="body2" color="text.primary">
                Nombre del curso
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {state.nombre}
              </Typography>
              <Typography variant="body2" color="text.primary" mt={3}>
                Resumen del curso
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {state.resumen}
              </Typography>
              <br />
              <Typography variant="body2" color="text.primary" mt={2}>
                {state.unidad}
                {' '}
                unidades |
                {state.horas}
                {' '}
                horas
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button style={{ padding: 8, width: 160 }} variant="contained">INGRESAR</Button>
            </CardActions>
            <br />
          </Card>
        )}
    </section>
  );
};

export default CardCourse;
