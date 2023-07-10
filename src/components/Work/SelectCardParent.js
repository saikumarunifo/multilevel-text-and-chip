import MyCard from "./SelectCard"
import SelectCardData from "./SelectCardData"
import React from "react";
 
const SelectCardParentComp = () => {

   return (
      <>
    <MyCard  selectCardProps = {SelectCardData.obj1} />
    <MyCard  selectCardProps = {SelectCardData.obj2} />
    <MyCard  selectCardProps = {SelectCardData.obj3} />
    <MyCard  selectCardProps = {SelectCardData.obj4} />
    <MyCard  selectCardProps = {SelectCardData.obj5} />
    <MyCard  selectCardProps = {SelectCardData.obj6} />
    </>
   )
};



export default SelectCardParentComp;