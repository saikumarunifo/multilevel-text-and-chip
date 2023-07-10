import React, { useState, useEffect, useRef } from 'react';
import { TextField, Chip } from '@mui/material';
import { makeStyles } from "@mui/styles";
import AdjustIcon from '@mui/icons-material/Adjust';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'nowrap',
    listStyle: 'none',
    padding: '10px',
    paddingBottom: 0,
    margin: 0,
    width: "289px",
    overflow: 'auto',
    backgroundColor: '#ffffff',
    scrollbarWidth: 'thin',
    scrollbarColor: '##3874FF',
    alignItems: "flexStart",

    '&::-webkit-scrollbar': {
      width: '5px',
      height: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '##3874FF',
      height: '154px',
      width: '185px',
    },
    '&::-webkit-scrollbar-track': {
      height: '723px',
      backgroundColor: '#dedede',
    },
    '&::-webkit-scrollbar-thumb:horizontal': {
      backgroundColor: '#075779',
      height: '185px',
    },
    '&::-webkit-scrollbar-track:horizontal': {
      backgroundColor: '#999',
      height: '723px',
    },
  },
}));

const AutocompleteControlled = () => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [chips, setChips] = useState([]);
  const textFieldRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const trimmedText = text.trim();
      if (trimmedText !== '') {
        setChips((prevChips) => [...prevChips, trimmedText]);
        setText('');
      }
    }
  };

  const handleDelete = (chip) => {
    setChips((prevChips) => prevChips.filter((c) => c !== chip));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (textFieldRef.current && !textFieldRef.current.contains(e.target)) {
        if (text.trim() !== '') {
          const trimmedText = text.trim();
          setChips((prevChips) => [...prevChips, trimmedText]);
          setText('');
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [text]);
  
  return (
    <TextField
      value={text}
      variant='filled'
      className={classes.root}
      InputProps={{
        style: {
          backgroundColor: "#ffffff", 
        },
        placeholder: chips.length === 0 ? 'Select' : '',
        startAdornment: (
           chips.map((chip, index) => (
            <Chip
            key={index}
            label={chip}
            icon={<AdjustIcon />}
            onDelete={() => handleDelete(chip)}
            style={{
              margin: "3px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "16px",
              color: "#050E25",
              backgroundColor: "#ffffff",
              border: "1px solid rgb(194 194 194)"
            }}
          />
          ))
        ),
      }}
      inputRef={textFieldRef}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
};

export default AutocompleteControlled;
