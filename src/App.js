import React from 'react';
import ParentComponent from './components/parentComp';
import './App.css';
import DemoData from './components/demoData';
import AutocompleteControlled from './components/autoComplete';
import AutocompleteSample from './components/autoCodeSample';
import AutocompleteSample1 from './components/practice';
import MyCard from './components/Work/SelectCard';
import SelectCardParentComp from './components/Work/SelectCardParent';
import Textfield from './components/Work/textfiled5';
import TextChip from './components/Work/textChip';
import ToolBar from './components/Work/toolbar';
import SearchTextBox from './components/Work/Search';
import MyComponent from './components/Work/Prac1';
import Toolbar2 from './components/Work/ToolBarLogic/ToolBar2';
import ReactScroll from './components/Work/ToolBarLogic/ReactScroll';
import PropsToReusable1ToolBar from './components/Work/ToolBarLogic/reuse1Sending';
import ControlledCardGroup from './components/Work/SelectCardParent';
import TextField55 from './components/Work/textfiled5';
import MainFile from './components/Work/parentProps';
import CustomAutocomplete from './components/autoCodeSample';
function App() {
  return (
    <div className="App">
       {/* <ParentComponent /> */}
      {/* <DemoData  /> */}
      {/* <AutocompleteControlled /> */}
      {/* <AutocompleteSample /> */}
      {/* <AutocompleteSample1 /> */}
       {/* < MainFile /> */}
       {/* <Textfield /> */}
       {/* <TextChip /> */}
       {/* <ToolBar /> */}
       {/* < MyComponent /> */}
       {/* <SearchTextBox
          width="302px"
          dropDown={true}
          text="Search"
          color="#000000"
          backgroundColor="#FFFFFF"
          border="1px solid #EFF0F1"
          suggestions="Change the props to achieve different search boxes." 
       /> */}
       <Toolbar2 />
       {/* <CustomAutocomplete /> */}
       {/* < Funcc /> */}
       {/* < PropsToReusable1ToolBar />  */}
       {/* <TextField55 width = '380px' /> */}
       {/* < ReactScroll /> */}
</div >
  )
}

export default App;
