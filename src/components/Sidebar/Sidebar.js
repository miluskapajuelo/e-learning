import React from 'react';
import {
  List, ListItem, ListItemText, ListItemIcon, SwipeableDrawer, Box, Divider,
} from '@material-ui/core';
import { AccountCircle, ExitToApp } from '@material-ui/icons';
import './Sidebar.scss';

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const closeMenu = () => {
    setOpenSidebar(false);
  };
  return (
    <div className="sidebar">
      <SwipeableDrawer
        anchor="left"
        open={openSidebar}
        onClose={closeMenu}
        onOpen={() => {}}
      >
        <Box alignSelf="center" p={2}>
          <img src="https://www.grupokonecta.com/wp-content/uploads/2016/07/logo-konecta-pie.svg" alt="logo" />
        </Box>
        <Divider />
        <List style={{ width: 250 }}>
          {['Mis cursos', 'Librería', 'Mi perfil'].map((text) => (
            <ListItem button key={text} onClick={closeMenu}>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <div className="sidebar__logout">
          <ExitToApp />
          Salir
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Sidebar;
