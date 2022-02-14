import * as React from 'react';
import {Modal, Box} from '@material-ui/core';

const style = {
  position: 'absolute',
  alignText: 'center',
  display: 'flex',
  justifyContent: 'center',
  justifySelf: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  bgcolor: 'black',
  border: '2px solid #000 ',
  boxShadow: 24,
  color: 'white',
  pt: 2,
  px: 4,
  pb: 3,
};


const Modals = ({open, handleOpen, handleClose, setOpen}) => {
  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
        <Box sx={{ ...style, }}>
            <h2 id="parent-modal-title">Text in a modal</h2>
            <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
        </Box>
        </Modal>
    </div>
  )
}

export default Modals