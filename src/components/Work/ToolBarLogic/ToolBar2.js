import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import CustomAppBar from "./dummyAppBar";
import { appBarData1 } from './ToolbarProps'
import { appBarData2 } from "./ToolbarProps";
import { appBarData3 } from "./ToolbarProps";
import { appBarData4 } from "./ToolbarProps";
import PageToolBarReusable from "../ToolBarReusable";
import CustomizedButton from "../../ReusableButton";
import SearchTextBox from "../Search";
import PageToolBarReusable1 from "./toolBarReusable1";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    //height: "90px",
    backgroundColor: "#f2f2f2", 
    zIndex: 1000,
  },
  table: {
    marginTop: "40px",
    minHeight: "800px",
    minWidth: "400px",
  },
  div1: {
    marginTop: "40px",
  },
  p: {
    margin: "20px",
    fontSize: "16px",
    lineHeight: "1.5px",
    minHeight: '300px'
  },
}));

const Toolbar2 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(
        window.pageYOffset || document.documentElement.scrollTop
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const getToolbarDisplay = (elementId) => {
    const tableElement = document.getElementById(elementId);
    if (tableElement) {
      const { top } = tableElement.getBoundingClientRect();
      if (top <= 0) {
        return "block";
      }
    }
    return "none";
  };
  

  const CustomizedButtonComponent = (buttonProps) => {

    return <CustomizedButton buttonProps={buttonProps} />;
  };

  return (
    <div>
        <div
        id="toolbar1"
        className={classes.toolbar}
        style={{ display: getToolbarDisplay("table1") }}
      >
        <PageToolBarReusable data={appBarData1} buttonComponent={<CustomizedButton buttonProps = {appBarData1.buttonProps} />} />
      </div>
      <table id="table1" className={classes.table}>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
          {/* More rows... */}
        </tbody>
      </table>

      <div
        id="toolbar2"
        className={classes.toolbar}
        style={{ display: getToolbarDisplay("table2") }}
      >
         <PageToolBarReusable data={appBarData2} buttonComponent={<CustomizedButton buttonProps = {appBarData2.buttonProps} />} searchBox = {<SearchTextBox width="302px"dropDown={true}text="Search"color="#000000"backgroundColor="#FFFFFF"border="1px solid #EFF0F1"suggestions="Change the props to achieve different search boxes."/>} />
      </div>
      <table id="table2" className={classes.table}>
      <thead>
          <tr>
            <th>Header A</th>
            <th>Header B</th>
            <th>Header d</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data A</td>
            <td>Data B</td>
            <td>Data C</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
        </tbody>
      </table>

      <div
        id="toolbar3"
        className={classes.toolbar}
        style={{ display: getToolbarDisplay("table3") }}
      >
        <PageToolBarReusable data={appBarData3} buttonComponent={<CustomizedButton buttonProps = {appBarData3.buttonProps} />} />
      </div>
      <table id="table3" className={classes.table}>
      <thead>
          <tr>
            <th>Header A</th>
            <th>Header B</th>
            <th>Header e</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data A</td>
            <td>Data B</td>
            <td>Data C</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
        </tbody>
      </table>

      <div
        id="toolbar4"
        className={classes.toolbar}
        style={{ display: getToolbarDisplay("table4") }}
      >
       <PageToolBarReusable data={appBarData4} buttonComponent={<CustomizedButton buttonProps = {appBarData4.buttonProps} />} searchBox = {<SearchTextBox width="302px"dropDown={true}text="Search"color="#000000"backgroundColor="#FFFFFF"border="1px solid #EFF0F1"suggestions="Change the props to achieve different search boxes."/>} />

      </div>
      <table id="table4" className={classes.table}>
      <thead>
          <tr>
            <th>Header A</th>
            <th>Header B</th>
            <th>Header d</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data A</td>
            <td>Data B</td>
            <td>Data C</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
          <tr>
            <td>Data X</td>
            <td>Data Y</td>
            <td>Data Z</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Toolbar2;








  // const getToolbarDisplay = (elementId) => {
  //   const tableElement = document.getElementById(elementId);
  //   if (tableElement) {
  //     const { top } = tableElement.getBoundingClientRect();
  //     if (top <= 0) {
  //       return "block";
  //     }
  //   }
  //   return "none";
  // };
  



  // const getToolbarDisplay = (elementId) => {
  //   const tableElement = document.getElementById(elementId);
  //   const lastTableElement = lastTableRef.current;

  //   if (tableElement) {
  //     const { top } = tableElement.getBoundingClientRect();
  //     const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  //     if ((lastTableElement && top <= windowHeight) || (!lastTableElement && top <= 0)) {
  //       return "block";
  //     } else if (top <= 0) {
  //       return "block";
  //     }
  //   }
  //   return "none";
  // };