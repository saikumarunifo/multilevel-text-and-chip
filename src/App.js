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
function App() {
  return (
    <div className="App">
       {/* <ParentComponent /> */}
      {/* <DemoData  /> */}
      {/* <AutocompleteControlled /> */}
      {/* <AutocompleteSample /> */}
      {/* <AutocompleteSample1 /> */}
       {/* < SelectCardParentComp /> */}
       <Textfield />
       {/* <TextChip /> */}
    </div>
  );
}

export default App;
