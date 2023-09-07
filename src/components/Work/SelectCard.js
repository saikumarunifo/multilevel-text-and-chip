import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/Home';
import { Icon } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px 12px 16px',
    gap: '4px',
    width: '240px',
    height: '48px',
    background: '#FFFFFF',
    border: '1px solid #3874FF',
    borderRadius: '4px',
  },
  cardDisabled: {
    border: "none",
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px 12px 16px',
    gap: '4px',
    width: '240px',
    height: '48px',
    background: '#FFFFFF',
    borderRadius: '4px',
  },
  typographyRoot: {
    '&.MuiTypography-root': {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '32px',
      color: '#050E25',
      minWidth: '21px',
      maxWidth: "160px",
      height: "25px",
      whiteSpace: 'nowrap', 
      overflow: 'hidden', 
    },
  },

  typographyDisabled: {
    color: "#626776 !important",
    fontFamily: 'Inter !important',
    fontStyle: 'normal !important',
    fontSize: '18px !important',
    lineHeight: '32px !important',
    minWidth: '21px !important',
    maxWidth: '160px !important',
    height: '25px !important',
    whiteSpace: 'nowrap !important',
    overflow: 'hidden !important',
  },
}));

const MyCard1 = ({ text, icon, iconColor, selected, onSelect }) => {
  const classes = useStyles();

  const handleCardClick = () => {
    if (!selected) {
      onSelect(text);
    }
  };
  
  const iconStyle = {
    color: selected ? iconColor : '#d3d3d3'
  };


  return (
    <Card
      className={selected ? classes.card : classes.cardDisabled}
      onClick={handleCardClick}
    >
      <Icon style={iconStyle}>
        {icon}
      </Icon>
      <CardContent className={classes.cardContentRoot}>
        <Typography
          className={selected ? classes.typographyRoot :classes.typographyDisabled}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard1;
