import React from 'react';
import CustomizedButton from './ReusableButton';
// import buttonData from './Buttondata';
// import { useStyles } from './ButtonStyles';
import { makeStyles } from "@mui/styles";
import './Button.css'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const useStyles = {
    customButton1: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "16px",
      padding: '4px 8px',
      gap: "8px",
      height: "24px",
      // left: "222px",
      // top: "518px",
      backgroundColor: '#3874FF',
      borderRadius: "4px",
      color: '#FFFFFF',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // flex: 'none',
      // order: 0,
      // flexGrow: 0,
      '&:hover': {
        boxShadow: '0px 3px 6px rgba(53, 110, 242, 0.58)',
        backgroundColor: '#3874FF',
        color: '#FFFFFF',
        borderRadius: "4px",
      },
      '&:disabled': {
        background: '#9497A1',
        borderRadius: "4px",
      //   left: "608px",
      //   top: "518px",
        color: '#FFFFFF',
      },
    },
    customButton2: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: "12px",
        lineHeight: "16px",
        padding: '8px 16px',
        gap: '8px',
        height: "32px",
        // left: "222px",
        // top: "824px",
        backgroundColor: 'rgba(56, 116, 255, 0.1)',
        border: '1px solid #3874FF',
        borderRadius: "4px",
        color: '#3874FF',
        // transition: 'box-shadow 0.2s ease-in-out',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    
        // flex: 'none',
        // order: 0,
        // flexGrow: 0,
        '&:hover': {
          boxShadow: '0px 3px 6px rgba(53, 110, 242, 0.58)',
          border: '1px solid #3874FF',
          backgroundColor: 'rgba(56, 116, 255, 0.1)',
          color: '#3874FF',
          borderRadius: "4px",
        },
        '&:disabled': {
          backgroundColor: '#EFF0F1',
        //   left: 608,
        //   top: 824,
          color: '#9B9FA8',
          border: '1px solid #9497A1',
          borderRadius: "4px",
        },
    },
    customButton3: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: "12px",
        lineHeight: "16px",
        padding: '4px 8px',
        gap: "8px",
        height: "24px",
        // left: 222,
        // top: 1162,
        backgroundColor: 'rgba(56, 116, 255, 0.1)',
        border: '1px solid #3874FF',
        color: '#3874FF',
        //transition: 'box-shadow 0.2s ease-in-out',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
        // flex: 'none',
        // order: 0,
        // flexGrow: 0,
        '&:hover': {
          border: '1px solid #3874FF',
          boxShadow: '0px 3px 6px rgba(53, 110, 242, 0.58)',
          borderRadius: "4px",
          color: '#3874FF',
        },
        '&:disabled': {
          backgroundColor: '#EFF0F1',
        //   left: 608,
        //   top: 1162,
          color: '#9B9FA8',
          border: '1px solid #9497A1',
          borderRadius: "4px",
        },
      },

      customButton4: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: "12px",
        lineHeight: "16px",
        height: "16px",
        color: '#3874FF',
        // left: 415,
        // top: 1808,
        //transition: 'box-shadow 0.2s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      
        // flex: 'none',
        // order: 0,
        // flexGrow: 0,
        '&:hover': {
          boxShadow: '0px 3px 6px rgba(53, 110, 242, 0.58)',
          borderRadius: "4px",
          color: '#3874FF',
          height: "24px",
          padding: '4px 8px',
          gap: 8,
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 0px 13px #EEEEF8',
          borderRadius: "4px",
          fontWeight: 600,
        },
        '&:disabled': {
          color: '#9497A1',
          height: "16px",
        },
      },
      customButton5: {
        height: 32,
        // top: 180,
        // left: 222,
        borderRadius: "4px",
        borderStyle: 'none',
        padding: '8px 16px',
        gap: 8,
        backgroundColor: '#3874FF',
        fontWeight: 600,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: "12px",
        lineHeight: "16px",
        color: '#FFFFFF',
        //transition: 'box-shadow 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0px 3px 6px rgba(53, 110, 242, 0.58)',
          backgroundColor: '#3874FF',
          color: '#FFFFFF',
          borderRadius: "4px",
        },
        '&:disabled': {
          backgroundColor: '#9497A1',
          color: '#FFFFFF',
        },
      },
      customButton6: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: "12px",
        lineHeight: "16px",
        height: "16px",
        color: '#3874FF',
        // left: 415,
        // top: 1808,
        // flex: 'none',
        // order: 0,
        // flexGrow: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
       
        //transition: 'box-shadow 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0px 0px 13px #EEEEF8',
          borderRadius: "4px",
          color: '#3874FF',
          height: "24px",
          padding: '4px 8px',
          gap: "8px",
          backgroundColor: '#FFFFFF',
          borderRadius: "4px",
          fontWeight: 600,
        },
        '&:disabled': {
          color: '#9497A1',
          height: "16px",
        },
      },

};



export default {
  title: 'ReusableButton',
};

const Template=args=><CustomizedButton {...args}/>
  

  export const PrimaryButtonNormal = Template.bind({});
  PrimaryButtonNormal.args = {
    text: "UNIFO",
    disabled: false,
    startIcon: <AccessAlarmIcon />,
    endIcon: <AccessAlarmIcon />,
    // classProperties: {...useStyles.customButton5}
    classProperties: "primaryButtonNormal",
    Suggestions:"give classProperties -- primaryButtonNormal, primaryButtonCondensed,  secondaryButtonNormal, secondaryButtonCondensed, tertiaryButtonNormal,   tertiaryButtonCondensed to see variants of button"
  };
  
// export const PrimaryButtonCondensed = Template.bind({});
// PrimaryButtonCondensed.args = {
//   text: "UNIFO",
//   disabled: false,
//   startIcon: true,
//   endIcon: true,
// //   classProperties: {...useStyles.customButton1}
// classProperties: "primaryButtonCondensed",
// Suggestions:"give custombutton 1 to 6 for checking the styles"
// };

// export const SecondaryButtonNormal = Template.bind({});
// SecondaryButtonNormal.args = {
//   text: "UNIFO",
//   disabled: false,
//   startIcon: false,
//   endIcon: false,
// //   classProperties: {...useStyles.customButton2}
// classProperties: "secondaryButtonNormal",
// Suggestions:"give custombutton 1 to 6 for checking the styles"
// };

// export const SecondaryButtonCondensed = Template.bind({});
// SecondaryButtonCondensed.args = {
//   text: "UNIFO",
//   disabled: false,
//   startIcon: true,
//   endIcon: false,
// //   classProperties: {...useStyles.customButton3} 
// classProperties: "secondaryButtonCondensed",
// Suggestions:"give custombutton 1 to 6 for checking the styles"
// };

// export const TertiaryNormal = Template.bind({});
// TertiaryNormal.args = {
//   text: "UNIFO",
//   disabled: false,
//   startIcon: true,
//   endIcon: false,
// //   classProperties: {...useStyles.customButton4} 
// classProperties: "tertiaryButtonNormal",
// Suggestions:"give custombutton 1 to 6 for checking the styles"
  
//   }

// export const TertiaryCondensed = Template.bind({});
// TertiaryCondensed.args = {
//   text: "UNIFO",
//   disabled: false,
//   startIcon: true,
//   endIcon: false,
// //   classProperties: {...useStyles.customButton6} 
// classProperties: "tertiaryButtonCondensed",
// Suggestions:"give custombutton 1 to 6 for checking the styles"
// };











































// export const PrimaryButtonNormal = () => {
//   const classes = useStyles();
//   return (
//     <CustomizedButton buttonProps={buttonData.obj1} styles={classes.customButton5} /> 
//   );
// };

// export const PrimaryButtonCondensed = () => {
//   const classes = useStyles();
//   return (
//     <CustomizedButton buttonProps={buttonData.obj2} styles={classes.customButton1} /> 
//   );
// };

// export const SecondaryButtonNormal = () => {
//   const classes = useStyles();
//   return (
//     <CustomizedButton buttonProps={buttonData.obj3} styles={classes.customButton2} />
//   );
// };

// export const SecondaryButtonCondensed = () => {
//   const classes = useStyles();
//   return (
//     <CustomizedButton buttonProps={buttonData.obj4} styles={classes.customButton3} />
//   );
// };

// export const TertiaryNormal = () => {
//   const classes = useStyles();
//   return (
//     <CustomizedButton buttonProps={buttonData.obj5} styles={classes.customButton4} />
//   );
// };

// export const TertiaryCondensed = () => {
//   const classes = useStyles();
//   return (
//     <CustomizedButton buttonProps={buttonData.obj6} styles={classes.customButton6} />
//   );
// };



    //option:countries,
  //   add:true,
  //   variant:"standard",
  //   label:'City', 
  //   add:true,
  //   value:'567780987654',
  //   classProperties:{margin:'25px',width:'50%'},
  //   dropDownStyle:{width:"95%"},
  //   variant:"outlined",
  // showStartAdornment:true,showEndAdornment:true,  variant:"standard",mandatory:'false'




// export const useStyles = makeStyles((theme) => ({
//   customButton1: {
//     fontFamily: 'Inter',
//     fontStyle: 'normal',
//     fontWeight: 600,
//     fontSize: "12px",
//     lineHeight: "16px",
//     padding: '4px 8px',
//     gap: "8px",
//     height: "24px",
//     // left: "222px",
//     // top: "518px",
//     backgroundColor: '#3874FF',
//     borderRadius: "4px",
//     color: '#FFFFFF',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // flex: 'none',
//     // order: 0,
//     // flexGrow: 0,
//     '&:hover': {
//       boxShadow: '0px 3px 6px rgba(53, 110, 242, 0.58)',
//       backgroundColor: '#3874FF',
//       color: '#FFFFFF',
//       borderRadius: "4px",
//     },
//     '&:disabled': {
//       background: '#9497A1',
//       borderRadius: "4px",
//     //   left: "608px",
//     //   top: "518px",
//       color: '#FFFFFF',
//     },
//   },



// export const Buttons=Template.bind({})
// Buttons.args={
//     //option:countries,
//   //   add:true,
//   //   variant:"standard",
//   //   label:'City', 
//   //   add:true,
//   //   value:'567780987654',
//   //   classProperties:{margin:'25px',width:'50%'},
//   //   dropDownStyle:{width:"95%"},
//   //   variant:"outlined",
//   // showStartAdornment:true,showEndAdornment:true,  variant:"standard",mandatory:'false'
//     text: "Button Label2",
//     disabled: false,
//     startIcon: true ,
//     // classProperties:{...classes.customButton1}
// }
