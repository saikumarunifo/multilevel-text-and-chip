import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Divider, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallMergeOutlinedIcon from '@mui/icons-material/CallMergeOutlined';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import JoinInnerOutlinedIcon from '@mui/icons-material/JoinInnerOutlined';

const useStyles = makeStyles((theme) => ({
  appBar: {
    '&.MuiAppBar-root': {
        backgroundColor: '#f5f5f5 !important',
        height: '48px !important',
        boxShadow: 'none',
        marginTop: '50px'
      },
  },
  toolbar: {
    '&.MuiToolbar-root': {
        minHeight: "48px !important",
        paddingLeft: '27px',
        paddingRight: '27px',
        display: 'flex',
        alignItems: 'center',
      }, 
  },
  Divider:{
    '&.MuiDivider-root': {
        border: "1px solid blue",  //#EFF0F1
        height: "16px",
        marginLeft: "6px",
        marginRight: "6px",
        marginTop: '7px',
      }
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
  },
  center1: {
    gap: '8px',
    display: 'flex',
    alignItems: 'center',
  },
  ButtonStyle: {
    fontFamily: 'Inter !important',
    fontStyle: 'normal !important',
    fontWeight: "400 !important",
    fontSize: '12px !important',
    lineHeight: '16px !important',
    color: '#050E25 !important',
    textTransform: 'none !important',
  },
  IconSize: {
    '&.MuiSvgIcon-root': {
        height: '16px',
        width: '16px',
    },
  },
  divContainer: {
    border: '1px solid blue', //#EFF0F1
    borderRadius: '4px',
    gap: '4px',
    padding: '2px 4px 2px 4px !important'

  }
}));

const AppBar2 = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <InfoOutlinedIcon className = {classes.IconSize} />
        </IconButton>
        <Typography className= {classes.ButtonStyle}>Select 0 Items</Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box className={classes.center}>
              <IconButton color="inherit">
                <UnfoldLessOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <FindReplaceIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <CalculateOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <CurrencyExchangeIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <FormatQuoteOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <CurrencyExchangeIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <ShareOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <Divider orientation="vertical" flexItem className= {classes.Divider} />
              <IconButton color="inherit">
                <AutoFixHighIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <LibraryAddOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <Divider orientation="vertical" flexItem className= {classes.Divider} />
              <IconButton color="inherit">
                <AppsOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <JoinInnerOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <CallMergeOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <Divider orientation="vertical" flexItem className= {classes.Divider} />

              <IconButton color="inherit">
                <UndoOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <RedoOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <LockOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <IconButton color="inherit">
                <FileUploadOutlinedIcon className = {classes.IconSize}/>
              </IconButton>
              <Divider orientation="vertical" flexItem className= {classes.Divider} />
        </Box>

        <Button className= {classes.ButtonStyle}>Audit</Button>
        <Box className={classes.center1}>
           <div className={classes.divContainer}>
             <IconButton style={{padding: '0px',color: 'red',}}>
              <HighlightOffRoundedIcon className={classes.IconSize}/>
          </IconButton>
             <span className= {classes.ButtonStyle}>{28}</span>
           </div>
           <div className={classes.divContainer}>
             <IconButton style={{padding: '0px',color: '#e86f79',}}>
              <WarningOutlinedIcon className={classes.IconSize}/>
          </IconButton>
             <span className= {classes.ButtonStyle}>{28}</span>
           </div>
           <div className={classes.divContainer}>
             <IconButton style={{padding: '0px',color: '#f5dd2c',}}>
              <InfoOutlinedIcon className={classes.IconSize}/>
          </IconButton>
             <span className= {classes.ButtonStyle}>{28}</span>
           </div>
        </Box>

        <Button className= {classes.ButtonStyle}>History</Button>
        <Button className= {classes.ButtonStyle}>Logs</Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppBar2;