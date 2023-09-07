import React from 'react';
import SelectCardParentComp from './SelectCardParent';
import { SelectCardData1, selectedCardData2 } from './SelectCardData';

const MainFile = () => {
  return (
    <>
      <SelectCardParentComp cardData={SelectCardData1} />
      <SelectCardParentComp cardData={selectedCardData2} />
    </>
  );
};

export default MainFile;
