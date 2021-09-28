import React, { useState, useEffect } from 'react';
import './Menu.scss';
import { useHistory } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import { onSnapshot } from 'firebase/firestore';
import CardCourse from '../CardCourse/CardCourse';
import ModalVideo from '../ModalVideo/ModalVideo';
import Sidebar from '../Sidebar/Sidebar';
import { queryCollection } from '../../services/Firebase/functions';

const Menu = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [post, setPosts] = useState([]);
  const history = useHistory();

  const onClickHandler = () => {
    setOpenSidebar(true);
  };

  const createCourse = () => {
    history.push('/create');
  };

  useEffect(() => {
    onSnapshot(queryCollection(), (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
      );
    });
  }, []);

  return (
    <section className="section">
      <ModalVideo />
      <article>
        <div className="section__header">
          <div
            className="logo"
            role="button"
            tabIndex={0}
            onMouseDown={onClickHandler}
          >
            <Typography gutterBottom variant="h4" component="div">
              Mis cursos
              {openSidebar}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Cursos para dar tus primeros pasos
            </Typography>
            <div className="section__menu--burger">
              <Menu />
              {' '}
              <p>Menu</p>
            </div>
          </div>
          <div className="section__menu--burger">
            <Button variant="outlined" startIcon={<AddCircleOutline />} onClick={createCourse} style={{ height: 45, marginRight: 5 }}>
              Crear curso
            </Button>
          </div>
        </div>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </article>
      <article className="section__container">
        {post.map((course, index) => <CardCourse course={course} key={index} />)}
      </article>
    </section>
  );
};

export default Menu;
