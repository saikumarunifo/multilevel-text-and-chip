import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Divider, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CustomizedButton from '../../ReusableButton';
import SearchTextBox from '../Search';

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
        paddingLeft: '24px',
        paddingRight: '24px',
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
  Divider1: {
    '&.MuiDivider-root': {
      border: "1px solid blue",  //#EFF0F1
      height: "15px",
      marginLeft: "16px",
      marginRight: "6px",
      marginTop: '15px',
    }
  },
  Divider2: {
    '&.MuiDivider-root': {
      border: "1px solid blue",  //#EFF0F1
      height: "16px",
      marginLeft: "6px",
      marginRight: "6px",
      marginTop: '5px',
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
    padding: '2px 4px 2px 4px !important',
    display: 'flex !important'
  },
   IconBtn: { 
    '& .MuiIconButton-root': {
        padding: '0px !important',
    }
   },
  TextIconBox: {
    gap: '6px',
    display: 'flex',
    alignItems: 'center',
  },
  ButtonGroup: {
    gap: '10px',
    display: 'flex !important',
  },
  ButtonAuditGrp: {
    display: 'flex !important',
    marginLeft: '10px',
    gap: '10px',
  }

}));



const PageToolBarReusable1 = ({data, buttonComponent, buttonComponent1, searchBox, auditIcons, auditValues}) => {
  const {icons, disabledIcons, dividerIndices, text, group} = data
  console.log('ButtonComp111111', buttonComponent);
  const classes = useStyles();

  const renderIcons = () => {
    return icons.map((Icon, index) => {
      const isDisabled = disabledIcons && disabledIcons.includes(index);
      return (
        <React.Fragment key={index}>
          <IconButton disabled={isDisabled}>
            <Icon className={classes.IconSize} />
          </IconButton>
          {dividerIndices.includes(index + 1) && index !== icons.length - 1 && <Divider orientation="vertical" flexItem className= {classes.Divider} />}
        </React.Fragment>
      );
    });
  };

  const renderAuditIcons = () => {
    return auditIcons.map((icon, index) => {
      const IconComponent = icon.component;
      return (
        <Box className={classes.divContainer} key={index}>
          <IconButton style={{ padding: '0px', color: icon.color }}>
            <IconComponent className={classes.IconSize} />
          </IconButton>
          <span className={classes.ButtonStyle}>{auditValues[index]}</span>
        </Box>
      );
    });
  };

  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box className = {classes.TextIconBox}>
        <IconButton className={classes.IconButton}>
          <InfoOutlinedIcon className = {classes.IconSize} />
        </IconButton>
        <Typography className= {classes.ButtonStyle}>{text[0]}<span>{90}</span> {text[1]}</Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box className={classes.center}>
            {renderIcons()}
        </Box>
        <Divider orientation="vertical" flexItem className= {classes.Divider1} />
        {searchBox ? (
          <Box className = {classes.center1} style = {{marginLeft: '11px'}}>
            {<SearchTextBox  {...searchBox}/>}
            <Divider orientation="vertical" flexItem className= {classes.Divider} />
          </Box>    
        ) : null}

        <Box className = {classes.ButtonAuditGrp} >
        {group ? (
        <Box className={classes.center1}>
            <Typography className={classes.ButtonStyle}>Audit</Typography>
              <div className= {classes.center1}>
              {renderAuditIcons()}
              </div>
        </Box>
         ) : null}
         <Box className = {classes.ButtonGroup} display="flex">
         <Divider orientation="vertical" flexItem className= {classes.Divider2} />
         <CustomizedButton buttonProps = {buttonComponent}/>
         <Divider orientation="vertical" flexItem className= {classes.Divider2} />
         <CustomizedButton buttonProps = {buttonComponent1} />
         </Box>
         </Box>
      </Toolbar>
    </AppBar>
  );
}

export default PageToolBarReusable1