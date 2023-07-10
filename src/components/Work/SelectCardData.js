import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';


const SelectCardData = { 
  obj1:{
    text: "Home Consumption",
    disabled: true,
    icon: <HomeIcon />,
    iconColor: '#b1a3f7',
  },
  obj2:{
    text: "Sea",
    disabled: false,
    icon: <DirectionsBoatIcon />,
    iconColor: '#80f2a8',
    },
obj3:{
    text: "Warehouse",
    disabled: false,
    icon: <CalendarViewDayIcon />,
    iconColor: '#5cd1cf',
    },
obj4:{
    text: "Air",
    disabled: true,
    icon: <FlightIcon />,
    iconColor: '#cc5c76',
    },
obj5:{
    text: "Exbond",
    disabled: true,
    icon: <CalendarViewDayIcon />,
    iconColor: '#5cd1cf',
     },
obj6:{
    text: "Land",
    disabled: false,
    icon: <LocalShippingIcon />,
    iconColor: '#b1a3f7',
    },
}

export default SelectCardData;
