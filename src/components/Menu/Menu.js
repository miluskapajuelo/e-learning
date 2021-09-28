import React, { useState, useEffect } from 'react';
import './Menu.scss';
import { useHistory } from 'react-router-dom';
import { Typography, Button, InputBase } from '@material-ui/core';
import { AddCircleOutline, Search } from '@material-ui/icons';
import { onSnapshot } from 'firebase/firestore';
import CardCourse from '../CardCourse/CardCourse';
import ModalVideo from '../ModalVideo/ModalVideo';
import Sidebar from '../Sidebar/Sidebar';
import { queryCollection } from '../../services/Firebase/functions';

const Menu = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [post, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isColaborador, setIsColaborador]= useState(false)
  const [data, setData]=useState({})
  const history = useHistory();

  const onClickHandler = () => {
    setOpenSidebar(true);
  };

  const createCourse = () => {
    history.push('/create');
  };

  const getRole = () => {
    const data = JSON.parse((localStorage.getItem('data')))
    setData(data)
    if(data.role === 'Administrador'){
      setIsColaborador(false)
    }
    else{
      setIsColaborador(true)
    }
  }
  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = post.filter((course) => {
      const name = course.data.nombre.toLowerCase()
      return name.search(value) !== -1;
    });
    setFilteredData(result);
  };

  useEffect(() => {
    onSnapshot(queryCollection(), (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),
      );
      setFilteredData(querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })),)
    });
    getRole()
  }, []);



  return (
    <section className="section">
      {isColaborador ? <ModalVideo /> : false}
      <article>
        <div className="section__header">
          <div
            className="logo"
            tabIndex={0}
          >
            <Typography gutterBottom variant="h4" component="div">
            {isColaborador ? 'Mis cursos': 'Cursos'}
              {openSidebar}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Cursos para dar tus primeros pasos
            </Typography>
          </div>
          <div className="section__menu--burger">
            {isColaborador? (<div className="section__search"><InputBase className="section__search-input" onChange={(event) => handleSearch(event)}>
            </InputBase ><div className="section__search-icon"><Search /></div></div>) : (<Button variant="outlined" startIcon={<AddCircleOutline />} onClick={createCourse} style={{ height: 38, marginRight: 6 }}>
              Crear curso
            </Button>)}
            <div className="section__menu--button"><Button variant="outlined" onClick={onClickHandler}>Menú</Button></div>
          </div>
        </div>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} data={data} />
      </article>
      <article className="section__container">
        {filteredData.map((course, index) => <CardCourse course={course} key={index} />)}
      </article>
    </section>
  );
};

export default Menu;
