import React from "react";
import MyCard1 from "./SelectCard1";
import SelectCardDataa from "./SelectCardData1";
import { Margin } from "@mui/icons-material";
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

export default {
  title: 'SelectionCards',
  //component: MyCard1,MyCard1 
};

const Template=args=><MyCard1 {...args}/>

export const SelectCardHomeConsump = Template.bind({});
SelectCardHomeConsump.args = {
  text: "Home Consumption",
  disabled: false,
  icon: <HomeIcon />,
  iconColor: '#b1a3f7',
  // selectCardProps: SelectCardDataa.obj1,
  // selected : SelectCardDataa.obj2
};


// export const SelectCardSea = Template.bind({});
// SelectCardSea.args = {
//   text: "Sea",
//   disabled: false,
//   icon: <DirectionsBoatIcon />,
//   iconColor: '#80f2a8',
//   // selectCardProps: SelectCardDataa.obj2,
//   // selected : SelectCardDataa.obj2
// };

// export const SelectCardWarehouse = Template.bind({});
// SelectCardWarehouse.args = {
//   text: "Warehouse",
//   disabled: false,
//   icon: <CalendarViewDayIcon />,
//   iconColor: '#5cd1cf',
//   // selectCardProps: SelectCardDataa.obj3,
//   // selected : SelectCardDataa.obj2
// };

// export const SelectCardAir = Template.bind({});
// SelectCardAir.args = {
//   text: "Air",
//   disabled: false,
//   icon: <FlightIcon />,
//   iconColor: '#cc5c76',
//   // selectCardProps: SelectCardDataa.obj4,
//   // selected : SelectCardDataa.obj2
// };

// export const SelectCardExbond = Template.bind({});
// SelectCardExbond.args = {
//   text: "Exbond",
//   disabled: false,
//   icon: <CalendarViewDayIcon />,
//   iconColor: '#5cd1cf',
//   // selectCardProps: SelectCardDataa.obj5,
//   // selected : SelectCardDataa.obj2
// };

// export const SelectCardLand = Template.bind({});
// SelectCardLand.args = {
//   text: "Land",
//   disabled: false,
//   icon: <LocalShippingIcon />,
//   iconColor: '#b1a3f7',
//   // selectCardProps: SelectCardDataa.obj6,
//   // selected : SelectCardDataa.obj2
// };
