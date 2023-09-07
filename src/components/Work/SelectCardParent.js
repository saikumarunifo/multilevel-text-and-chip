import React, { useState } from 'react';
import MyCard1 from './SelectCard';

const SelectCardParentComp = ({ cardData }) => {
  const [selectedCard, setSelectedCard] = useState('');

  const handleCardSelect = (text) => {
    setSelectedCard(text);
  };

  return (
    <>
      {Object.keys(cardData).map((key) => {
        const data = cardData[key];
        return (
          <MyCard1
            key={key}
            text={data.text}
            disabled={data.disabled}
            icon={data.icon}
            iconColor={data.iconColor}
            selected={selectedCard === data.text}
            onSelect={handleCardSelect}
          />
        );
      })}
    </>
  );
};

export default SelectCardParentComp;

