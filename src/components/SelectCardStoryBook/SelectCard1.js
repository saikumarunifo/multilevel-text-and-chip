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
    //boxSizing: "border-box",
  },
  icon: {
    // width: '19px',
    // height: '19px',
    // border: '1px solid #3874FF',
    // marginLeft: '4px',
  },
  // disabled: {
  //   opacity: 0.5,
  //   pointerEvents: none
  // },
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
      lineHeight: '23px',
      color: '#050E25',
      minWidth: '21px',
      maxWidth: "150px",
      height: "18px",
      whiteSpace: 'nowrap', 
      overflow: 'hidden',
      //textOverflow: 'ellipsis', 
      //marginLeft: "2rem",
      pointerEvents: 'none', 
    },
  },

  typographyDisabled: {
      color: "#626776",
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '23px',
      minWidth: '21px',
      maxWidth: "150px",
      height: "18px",
      whiteSpace: 'nowrap', 
      overflow: 'hidden',
      //textOverflow: 'ellipsis', 
      //marginLeft: "2rem",
      pointerEvents: 'none'
  },
  // cardContentRoot: {
  //   '&.MuiCardContent-root': {
  //     // paddingLeft: "25px",
  //     // marginLeft: "-1.5rem",
  //   }
  // },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    justifyContent: 'center',
  },
}));

const MyCard = (props) => {
  const {selectCardProps} = props
  const classes = useStyles();
  const iconStyle = {
    color: selectCardProps.disabled ? '#d3d3d3' : selectCardProps.iconColor,
  };

  return (
    <div className={classes.container}>
      <Card className={selectCardProps.disabled ? classes.cardDisabled : classes.card}>
      <Icon style={iconStyle}>

           {selectCardProps.icon}                                      
        </Icon>
        <CardContent className= {classes.cardContentRoot}>
          <Typography  className={selectCardProps.disabled ? classes.typographyDisabled : classes.typographyRoot}>
              {selectCardProps.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyCard;