import { Autocomplete, TextField, Chip } from "@mui/material";
import { useState,  useRef } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export default function App() {
  const [receivers, setReceivers] = useState([]);
  const [enteredValue, setEnteredValue] = useState("");
  const textFieldRef = useRef(null);

  const handleKeyPress = (e) => {
    //console.log('keys', e.key)
    if (e.key === 'Enter') {
      const trimmedText = enteredValue.trim();
      if (trimmedText !== '') {   
        setReceivers((prevChips) => [...prevChips, trimmedText]);
        setEnteredValue('');
      } 
    }
  };

  const handleDelete = (chip) => {
    setReceivers((prevChips) => prevChips.filterenteredValue((c) => c !== chip));
  };
  
  const handleBlur = () => {
    if (enteredValue.trim() !== '') {
      setReceivers([...receivers, enteredValue.trim()]);
      //console.log('receiverssss', receivers);
    }
    setEnteredValue('');
    //console.log('enteredValueeee', enter);
  };

  return (
    <div>
      <Autocomplete
        multiple
        id="tags-filled"
        options={[]}
        defaultValue={[]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            //console.log('value', value); 
            return (
              <Chip
                key={index}
                icon={<ArrowCircleUpIcon />}
                variant="outlined"
                label={option}
                onDelete={() => handleDelete(option)}
                {...getTagProps({ index })}
                style={{
                  margin: "2px",
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
            );
          })
        }
        renderInput={(params) => {
          //console.log('params',params);
          return (
            <TextField
              inputRef={textFieldRef}
              style={{ width: "350px" }}
              variant="filled"
              {...params}
              label=""
              placeholder="Select"
              value={enteredValue}
              onChange={(event) => setEnteredValue(event.target.value)}
              onBlur={handleBlur}
              InputProps={{
                ...params.InputProps,
                endAdornment: null,   
              }}
              onKeyDown={handleKeyPress}
            />
          );
        }}
      />
    </div>
  );
}




