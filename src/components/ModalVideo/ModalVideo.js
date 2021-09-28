import React, { useState } from 'react';
import {
  DialogTitle, IconButton, Dialog, DialogContent, Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import login from '../../assets/images/login.svg';
import './ModalVideo.scss';
import intro from './../../assets/video/welcome.mp4'

const ModalVideo = () => {
  const [openPopup, setOpenPopup] = useState(true);
  const closeModal = () => { setOpenPopup(false); };

  return (
    <section>
      <Dialog
        open={openPopup}
        maxWidth="md"
        className="modal__content"
      >
        <DialogTitle>
          <Typography gutterBottom variant="h4" component="div" className="modal__title">Bienvenidx!</Typography>
          <IconButton
            aria-label="close"
            onClick={closeModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#C054F2',
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div>
          <video width="600" height="340" autoPlay>
            <source src={intro} type="video/mp4"/>
          </video>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ModalVideo;
