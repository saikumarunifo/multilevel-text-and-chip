import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Divider, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PageToolBarReusable from './ToolBarReusable';
import CustomizedButton from '../ReusableButton';

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
    },
  },
  toolbar: {
    '&.MuiToolbar-root': {
      minHeight: '48px !important',
      paddingLeft: '27px',
      paddingRight: '27px',
      display: 'flex',
      alignItems: 'center',
    },
  },
  icon: {
    marginRight: '16px',
  },
}));

const PageAppBar = ({ activeSection }) => {
  const classes = useStyles();

  const icons = [
    UnfoldLessOutlinedIcon,
    FindReplaceIcon,
    CalculateOutlinedIcon,
    CurrencyExchangeIcon,
    FormatQuoteOutlinedIcon,
    CurrencyExchangeIcon,
    ShareOutlinedIcon,
    AutoFixHighIcon,
    LibraryAddOutlinedIcon,
    AppsOutlinedIcon,
    JoinInnerOutlinedIcon,
    CallMergeOutlinedIcon,
    UndoOutlinedIcon,
    RedoOutlinedIcon,
    LockOutlinedIcon,
    FileUploadOutlinedIcon,
    ShareOutlinedIcon,
    JoinInnerOutlinedIcon,
  ];
  
  const disabledIcons = [1, 4, 7, 12]; 
  const dividerIndices = [7, 9, 12, 17];

  const buttonProps = {
    color: 'primary',
    variant: 'contained',
    disabled: false,
    className: {
      fontFamily: 'Inter !important',
      fontStyle: 'normal !important',
      fontWeight: "400 !important",
      fontSize: '12px !important',
      lineHeight: '16px !important',
      color: '#050E25 !important',
      textTransform: 'none !important',
    },
    startIcon: <FindReplaceIcon />,
    text: 'History',
  };

  const CustomizedButtonComponent = (
    <CustomizedButton buttonProps={buttonProps} />
  );


  const renderOptions = () => {
    if (activeSection === 'item') {
      return (
        <PageToolBarReusable
          text = 'Select 0 Items'
          icons={icons}
          disabledIcons={disabledIcons}
          dividerIndices={dividerIndices}
          buttonComponent={CustomizedButtonComponent}
        />

      );
    } else if (activeSection === 'job') {
      return (
        <React.Fragment>
          <WorkIcon className={classes.icon} />
          <Typography variant="body1">Job Section</Typography>
        </React.Fragment>
      );
    } else if (activeSection === 'seller') {
      return (
        <React.Fragment>
          <PersonIcon className={classes.icon} />
          <Typography variant="body1">Seller Section</Typography>
        </React.Fragment>
      );
    } else if (activeSection === 'buyer') {
      return (
        <React.Fragment>
          <PersonIcon className={classes.icon} />
          <Typography variant="body1">Buyer Section</Typography>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Typography variant="body1">Default Section</Typography>
        </React.Fragment>
      );
    }
  };

  return (
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {renderOptions()}
      </Toolbar>
    </AppBar>
  );
};

export default PageAppBar;
