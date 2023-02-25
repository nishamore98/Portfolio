import React, { useState } from 'react';
import './style.css';
import Home from './Home';
import { Modal, Button } from '@mui/material';

export default function App() {
  const [openModal, setOpenModal] = useState(true);
  const proceed = () => {
    setOpenModal(false);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal open={openModal}>
        <div className="modal-wrapper" sx={style}>
          <h1>Hey, welcome to my portfolio</h1>
          <Button
            className={'continueBtn'}
            variant="contained"
            color="secondary"
            onClick={() => proceed()}
          >
            Continue
          </Button>
        </div>
      </Modal>
      <Home />
    </div>
  );
}
