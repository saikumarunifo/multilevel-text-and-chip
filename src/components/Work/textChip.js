import { Autocomplete, TextField, Chip } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export default function TextChip() {
  const [receivers, setReceivers] = useState([]);
  const [enteredValue, setEnteredValue] = useState("");
  const textFieldRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        addChip()
      }
  };

  const handleDelete = (chip) => {
    setReceivers((prevChips) => prevChips.filterenteredValue((c) => c !== chip));
  };
  
  const handleBlur = () => {
    addChip()
  };

  const addChip = () => {
    if (enteredValue.trim() !== '') {
        setReceivers([...receivers, enteredValue.trim()]);
        setEnteredValue('');
    }
  };

  return (
    <div>
      <Autocomplete
        multiple
        options={[]}
        value={receivers}
        onChange={(event, newValue) => setReceivers(newValue)}
        inputValue={enteredValue}
        onInputChange={(event, newInputValue) => setEnteredValue(newInputValue)}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
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
