import React from "react";
import "./Cadastro.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FormularioDeCadastro from "../components/Formulario/formularioDeCadastro";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 400,
  },
}));

export default function Cadastro() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <button type="button" onClick={handleOpen}>
        Clique aqui e Cadastre-se!
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className= "modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '2px', marginTop: '5px'}}> Cadastre-se </p>
            <p style={{fontSize: '16px', marginBottom: '20px', marginTop: 0, color: '#606770'}}>É rápido e fácil.</p>
            <FormularioDeCadastro> </FormularioDeCadastro>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
