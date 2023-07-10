import React from "react";
import Button from '@mui/material/Button';
import '../App.css'

const CustomizedButton = (props) => {
  const {buttonProps} = props
  console.log('classnameResuableButton', buttonProps.className)
  return (
    <>
      
        
        <Button
          onClick={buttonProps.onClick}
          color={buttonProps.color}
          variant={buttonProps.variant}
          disabled={buttonProps.disabled}
          className={buttonProps.className}
        >
          {buttonProps.startIcon && (
            <span>{buttonProps.startIcon}</span>
          )}
          <span>{buttonProps.text}</span>
          {buttonProps.endIcon && <span >{buttonProps.endIcon}</span>}
        </Button>
   
    </>
  );
};

export default CustomizedButton;



