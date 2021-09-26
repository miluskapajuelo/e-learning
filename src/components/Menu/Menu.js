import React, { useState } from 'react';
import './Menu.scss';
import { Typography, Button } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import CardCourse from '../CardCourse/CardCourse';
import Sidebar from '../Sidebar/Sidebar';

const Menu = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const history = useHistory();

  const onClickHandler = () => {
    setOpenSidebar(true);
  };

  const createCourse = () => {
    history.push('/create');
  };

  return (
    <section className="section">
      <article>
        <div className="section__header">
          <div
            className="logo"
            role="button"
            tabIndex={0}
            onMouseDown={onClickHandler}
          >
            <img
              src="https://www.grupokonecta.com/wp-content/uploads/2016/07/logo-konecta-pie.svg"
              alt="logo"
            />
            <Typography gutterBottom variant="h4" component="div">
              Cursos
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Cursos para dar tus primeros pasos
            </Typography>
          </div>
          <Button variant="outlined" startIcon={<AddCircleOutline />} onClick={createCourse} style={{ height: 45, marginRight: 5 }}>
            Crear curso
          </Button>
        </div>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </article>
      <article className="section__container">
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
      </article>
    </section>
  );
};

export default Menu;
