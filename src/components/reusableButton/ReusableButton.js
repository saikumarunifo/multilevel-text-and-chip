import React from "react";
import Button from '@mui/material/Button';
import { useStyles } from "./ButtonStyles";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './Button.css'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


const CustomizedButton = (props) => {
  const {onClick, disabled, text, startIcon, endIcon, classProperties} = props
  const iconStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      
        <Button
          onClick={onClick}
          disabled={disabled}
          //className= {classProperties}
          // style={{...classProperties}} 
          className= {classProperties}
        >
          {startIcon && (
            <span style={iconStyles}>{startIcon}</span>
          )}
          <span>{text}</span>
          {endIcon && <span style={iconStyles}>{endIcon}</span>}
        </Button>
   
    </>
  );
};

export default CustomizedButton;