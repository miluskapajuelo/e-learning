import React from 'react';
import { Snackbar, Alert } from '@material-ui/core';

export const AlertSuccess = ({ openSuccess, setOpenSuccess }) => {
  const handleClose = () => {
    setOpenSuccess(false);
  };
  return (
    <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Operación exitosa
      </Alert>
    </Snackbar>
  );
};

export const AlertError = ({ openError, setOpenError }) => {
  const handleClose = () => {
    setOpenError(false);
  };
  return (
    <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Operación fallida, vuelva a intentar
      </Alert>
    </Snackbar>
  );
};
