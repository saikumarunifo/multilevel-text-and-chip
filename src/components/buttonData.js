import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import '../App.css'
import { useStyles } from "./reusableButton/ButtonStyles";


const buttonData = { 
  obj1:{
  onClick: () => {console.log('button clicked1')},
  text: "Button Label1",
  disabled: false,
  className: "customButton1",
  startIcon: <SentimentSatisfiedAltIcon />,
  endIcon: <SentimentSatisfiedAltIcon />,
  },
obj2: {
  onClick: () => {console.log('button clicked2')},
  text: "Button Label2",
  disabled: false,
  className: "customButton2",
   startIcon: <SentimentSatisfiedAltIcon />,
   endIcon: <SentimentSatisfiedAltIcon />,
},  
obj3:{
  onClick: () => {console.log('button clicked3')},
  text: "Button Label3",
  disabled: false,
  startIcon: <SentimentSatisfiedAltIcon />,
  endIcon: <SentimentSatisfiedAltIcon />,
  className: "customButton3"
},
obj4:{
  onClick: () => {console.log('button clicked4')},
  text: "Button label4",
  disabled: false,
  startIcon: <SentimentSatisfiedAltIcon />,
  endIcon: <SentimentSatisfiedAltIcon />,
  className: "customButton4"
},
obj5:{
  onClick: () => {console.log('button clicked5')},
  text: "Button Lable5",
  disabled: false,
  className: "customButton5",
  startIcon: <SentimentSatisfiedAltIcon />,
  endIcon: <SentimentSatisfiedAltIcon />,
},
obj6:{
  onClick: () => {console.log('button clicked5')},
  text: "Button Lable6",
  disabled: false,
  className: "customButton6",
  startIcon: <SentimentSatisfiedAltIcon />,
  endIcon: <SentimentSatisfiedAltIcon />,
}
}

export default buttonData;





















// const buttonData = [{
//   var1:{text: "disabled",
//     color: "primary",
//     variant: "contained",
//     disabled: true,
//     className: "customButton1"
//   },
//   var2:{
//     text: "variant contained",
//     color: "primary",
//     variant: "contained",
//     disabled: false,
//     className: "customButton2"
//   },
//   var3:{
//     text: "end icon",
//     color: "success",
//     variant: "string",
//     disabled: false,
//     endIcon: <PlayArrowIcon />,
//     className: "customButton3"
//   },
//   var4:{
//     text: "start icon",
//     color: "primary",
//     variant: "contained",
//     disabled: false,
//     startIcon: <HourglassEmptyIcon />,
//     className: "customButton6"
//   },
//   var5:{
//     text: "variant outlined",
//     color: "info",
//     variant: "outlined",
//     disabled: false,
//     className: "customButton5"
//   }
// }];