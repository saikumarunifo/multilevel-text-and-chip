import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    minHeight: '15px',
    boxShadow: 'none !important',
  },
}));

const CustomAppBar = ({ title }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className= {classes.appBar} >
      <Toolbar>
        <Typography variant="subtitle1">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
