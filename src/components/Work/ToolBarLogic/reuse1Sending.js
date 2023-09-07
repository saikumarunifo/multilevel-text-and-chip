import React from 'react';
import {appBarData1} from './reusable1Props'
import PageToolBarReusable1 from './toolBarReusable1';


  const PropsToReusable1ToolBar = () => {

  const searchBoxProps = {
    width:"302px",
    dropDown: true,
    text:"Search",
    color: "#000000",
    backgroundColor:"#FFFFFF",
    border:"1px solid #EFF0F1",
    suggestions: "Change the props to achieve different search boxes.",

  }
    return (
        <PageToolBarReusable1 data={appBarData1} buttonComponent={appBarData1.buttonProps} buttonComponent1 = {appBarData1.buttonProps1} searchBox={searchBoxProps}  auditIcons = {appBarData1.auditIcons} auditValues = {appBarData1.auditValues}  />

    )
  }



  export default PropsToReusable1ToolBar



