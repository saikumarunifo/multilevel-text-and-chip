import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Divider, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';

const useStyles = makeStyles((theme) => ({
  appBar: {
    '&.MuiAppBar-root': {
        backgroundColor: '#f5f5f5 !important',
        height: '48px !important',
        boxShadow: 'none',
        //marginTop: '50px'
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

  },
  TextIconBox: {
    gap: '6px',
    display: 'flex',
    alignItems: 'center',
  }
}));



const PageToolBarReusable = ({data, buttonComponent, searchBox}) => {
  const {icons, disabledIcons, dividerIndices, text, group} = data
  console.log('ButtonComp', buttonComponent);

// console.log('propsIcons', icons);
// console.log('propsDisabledIcons', disabledIcons);
// console.log('propsDisabledDividedr', dividerIndices);
// console.log('propsText', text);
// console.log('propsButtonComp', buttonComponent);

  const classes = useStyles();

  const renderIcons = () => {
    return icons.map((Icon, index) => {
      const isDisabled = disabledIcons && disabledIcons.includes(index);
      return (
        <React.Fragment key={index}>
          <IconButton color="inherit" disabled={isDisabled}>
            <Icon className={classes.IconSize} />
          </IconButton>
          {dividerIndices.includes(index + 1) && index !== icons.length - 1 && <Divider orientation="vertical" flexItem className= {classes.Divider} />}
        </React.Fragment>
      );
    });
  };

  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box className = {classes.TextIconBox}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <InfoOutlinedIcon className = {classes.IconSize} />
        </IconButton>
        <Typography className= {classes.ButtonStyle}>{text}</Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box className={classes.center}>
            {renderIcons()}
        </Box>
        {searchBox && searchBox}
        <Button className= {classes.ButtonStyle}>Audit</Button>
        {group ? (
        <Box className={classes.center1}>
              <div className= {classes.center1}>
                <div className={classes.divContainer}>
                  <IconButton style={{ padding: '0px', color: 'red' }}>
                    <HighlightOffRoundedIcon className={classes.IconSize} />
                  </IconButton>
                  <span className={classes.ButtonStyle}>{28}</span>
                </div>
                <div className={classes.divContainer}>
                  <IconButton style={{ padding: '0px', color: '#e86f79' }}>
                    <WarningOutlinedIcon className={classes.IconSize} />
                  </IconButton>
                  <span className={classes.ButtonStyle}>{28}</span>
                </div>
                <div className={classes.divContainer}>
                  <IconButton style={{ padding: '0px', color: '#f5dd2c' }}>
                    <InfoOutlinedIcon className={classes.IconSize} />
                  </IconButton>
                  <span className={classes.ButtonStyle}>{28}</span>
                </div>
              </div>
        </Box>
         ) : null}

        {/* <Button className= {classes.ButtonStyle}>History</Button> */}
        {/* <Button className= {classes.ButtonStyle}>History</Button> */}
        {buttonComponent}
        <Button className= {classes.ButtonStyle}>Logs</Button>
      </Toolbar>
    </AppBar>
  );
}

export default PageToolBarReusable;