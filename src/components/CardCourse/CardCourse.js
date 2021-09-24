import React, { useState } from 'react';
import './CardCourse.scss';
import {
  Card, CardActions, CardContent, CardMedia, Button, Typography, Rating,
} from '@material-ui/core';
import login from '../../assets/images/login.svg';

const CardCourse = () => {
  const [value, setValue] = useState(0);

  const ratingChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="Card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={login}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Curso estrella
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={ratingChange}
          />
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <br />
          <Typography variant="body2" color="text.primary">
            6 unidades | 2 horas
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button style={{ padding: 8, width: 160 }} variant="contained">Iniciar sesiòn</Button>
        </CardActions>
        <br />
      </Card>
    </section>
  );
};

export default CardCourse;
