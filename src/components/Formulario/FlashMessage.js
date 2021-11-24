import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert (props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const FlashMessage = ({message}) => {

  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          O seu cadastro foi realizado com sucesso!
        </Alert>
      </Snackbar>
    </div>
  );
} 
export default FlashMessage;