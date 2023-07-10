import React from "react";
import CustomizedButton from "./ReusableButton";
import buttonData from "./buttonData";

const ParentComponent = () => {
 // console.log(buttonData , "buttonData")
  return (
   <>
    
        <CustomizedButton buttonProps = {buttonData.obj1} />
      
        <CustomizedButton buttonProps={buttonData.obj2} />
      
        <CustomizedButton buttonProps={buttonData.obj3} />
      
        <CustomizedButton buttonProps={buttonData.obj4} />
      
        <CustomizedButton buttonProps={buttonData.obj5} />
        <CustomizedButton buttonProps={buttonData.obj6} />
        </>
  );
};

export default ParentComponent;























































































// import React, { useState } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import RestartAltIcon from '@mui/icons-material/RestartAlt';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// import ReusableButton from './ReusableButton';

// import '../App.css'

// function MyDialogBox() {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);  
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <ReusableButton variant="contained" color="primary" onClick={handleClickOpen} text= 'Open Dialog' disabled = {false}/>
//       <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title" className='dialog-box'>
//         <DialogTitle id="dialog-title">Example Dialog</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//           <span className='heading'>Enter Remarks</span>
//                 <TextField
//                     className='text-field'
//                     id="outlined-multiline-static"
//                     label="Enter your Remarks"
//                     multiline
//                     rows={3}
//                     defaultValue=""
//                 />
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>

//           <ReusableButton onClick={handleClose} color="primary" variant='text' text = 'Close' disabled = {false}  startIcon={<RestartAltIcon />} endIcon={<PlayArrowIcon />}/>
//           <ReusableButton onClick={handleClose} color="primary" variant='contained' text = 'Add Status' disabled = {true} />
//           <ReusableButton onClick={handleClose} color="primary" variant='contained' text = 'Add Status' disabled = {true} />
//           <ReusableButton onClick={handleClose} color="primary" variant='contained' text = 'Add Status' disabled = {true} />
//           <ReusableButton onClick={handleClose} color="primary" variant='contained' text = 'Add Status' disabled = {false} />

//         </DialogActions>
//       </Dialog>
//     </div> 
//   );
// }

// export default MyDialogBox;
