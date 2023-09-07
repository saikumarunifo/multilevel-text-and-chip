import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
// import Image from './image.svg'
import { makeStyles } from '@mui/styles';
import ClearIcon from '@mui/icons-material/Clear';
// import { Avatar } from '@mui/material';
import Avatar from 'react-avatar';
import wrong from './wrong.svg'

const useStyles = makeStyles({
  textFieldRoot: {
    '&.MuiTextField-root': {
      width: '0px',
    },
    '& .MuiFilledInput-input': {
      fontSize: '12px !important',
      fontWeight: 400,
    }
  },

  underline: {
    '&:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#3874FF !important',
    },
  },
  autoCompleteRoot: {
    '& .MuiButtonBase-root-MuiChip-root': {
      padding: '4px 8px !important',

    },
    '& .MuiFilledInput-root': {
      padding: '4px 8px !important',
      backgroundColor: '#ffffff !important',
    },
    '& .MuiFilledInput-input': {
      padding: '4px 8px !important',
    },
    '& .MuiFilledInput-root:before': {
      borderBottom: '0px solid #3874FF'
    },
    '& .MuiFilledInput-root:after': {
      borderBottom: '1px solid #3874FF'
    },
    '& .MuiChip-label': {
        paddingLeft: '0px !important',
        paddingRight: '4px !important',
    },
    '& .MuiChip-avatar': {
      marginLeft: '0px !important',
    },
    '& .MuiAutocomplete-tag': {
      maxHeight: '24px !important',
    },
    '& .MuiChip-deleteIcon': {
       margin: '0px 3px 0px -6px !important'
    },

  } 

});


const TextField55 = ({width}) => {
  const classes = useStyles()
  const [chips, setChips] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [disable, setDisable] = React.useState(true)

  const handleBlur = () => {
    setDisable(false)
    addChip()
  }

  const handleDelete = (chip) => {
    setChips((prevChips) => prevChips.filter((c) => c !== chip))
  }

  const addChip = () => {
    if (inputValue.trim() !== '') {
      const newChip = { value: inputValue.trim() }
      setChips([...chips, newChip]);
      setInputValue('');
    } 

  }

  const widthStyle = width ? width : '289px'

  return (
    <div>
      <Autocomplete
        multiple
        freeSolo
        value={chips}
        onChange={(event, newValue) => setChips(newValue)}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        options={[]}
        className= {classes.autoCompleteRoot}
        style={{display: 'inline'}}
        renderTags={(value, getTagProps) =>
          value.map((chip, index) => (
            <div style={{padding: '1px'}}>
            <Chip
              key={index}
              //icon={<img src={Image} alt="icon" style={{ width: '16px', height: '16px' }} />}
              avatar={<Avatar size='16' textSizeRatio={2} round = {true} maxInitials = {1} name= {chip.value ? chip.value : chip}  />}  //style={{padding: '4px'}}
              //variant="outlined"
              className= {classes.chipRoot}
              label={chip.value ? chip.value : chip}
              onDelete={() => handleDelete(chip)}
              {...getTagProps({ index })}
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#050E25',
                backgroundColor: '#ffffff',
                border: '1px solid #EFF0F1',
                paddingLeft: '3px',
                gap: '10px',
              }}
              deleteIcon={<img
                src={wrong}
                alt="wrong-icon"
              />} 
            />
            </div>
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            className= {classes.textFieldRoot}
            style={{width: width ? width : '289px'}}
            // onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            variant="filled"
            label=""
            placeholder="Select"
            InputProps={{
              classes: {
                underline: classes.underline,
              },
              ...params.InputProps,
              endAdornment: null, 
              //disableUnderline: disable
            }}
          />
        )}
      />
    </div>
  )
}

export default TextField55



        


         





































// import React, { useState, useRef, useEffect } from 'react';
// import TextField from '@mui/material/TextField';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';

// function App() {
//   const [chips, setChips] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const inputRef = useRef(null);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleInputKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       addChip();
//     }
//   };

//   const addChip = () => {
//     if (inputValue.trim() !== '') {
//       setChips([...chips, inputValue.trim()]);
//       setInputValue('');
//     }
//   };

//   const handleChipDelete = (chipToDelete) => () => {
//     setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
//     inputRef.current.focus();
//   };

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return (
//     <div style={{ width: '350px' }}>
//       <TextFieldlabel
//         label=""
//         value={inputValue}
//         onChange={handleInputChange}
//         variant='filled'
//         onKeyPress={handleInputKeyPress}
//         fullWidth
//         inputRef={inputRef}
//         InputProps={{
//           endAdornment: (
//             <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
//               {chips.map((chip, index) => (
//                 <Chip
//                   key={index}
//                   label={chip}
//                   onDelete={handleChipDelete(chip)}
//                 />
//               ))}
//             </Stack>
//           ),
//           disableUnderline: true,
//         }}
//       />
//     </div>
//   );
// }

// export default App;


// Code of textfield/autocomplete

// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Chip from '@mui/material/Chip';
// import Image from './image.svg';

// function App() {
//   const [chips, setChips] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleBlur = () => {
//     if (inputValue.trim() !== '') {
//       setChips([...chips, inputValue.trim()]);
//     }
//     setInputValue('');
//   };

//   const handleChipDelete = (chipToDelete) => {
//     setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
//   };

//   return (
//     <div style={{ width: '350px', backgroundColor: '#ffffff' }}>
//       <Autocomplete
//         multiple
//         options={[]}
//         value={chips}
//         onChange={(event, newValue) => {
//           setChips(newValue);
//         }}
//         freeSolo
//         renderTags={(value, getTagProps) =>
//           value.map((option, index) => (
//             <Chip
//               key={index}
//               label={option}
//               onDelete={() => handleChipDelete(option)}
//               icon={<img src={Image} alt="Icon" />} 
//               {...getTagProps({ index })}
//               style={{
//                 margin: "2px",
//                 fontFamily: "Inter",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 fontSize: "14px",
//                 lineHeight: "16px",
//                 color: "#050E25",
//                 backgroundColor: "#ffffff",
//                 border: "1px solid rgb(194 194 194)"
//               }}
//             />
//           ))
//         }
//         inputValue={inputValue}
//         onInputChange={handleInputChange}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label=""
//             variant="filled"
//             onKeyDown={(event) => {
//               if (event.key === 'Enter' && inputValue.trim() !== '') {
//                 setChips([...chips, inputValue.trim()]);
//                 setInputValue('');
//               }
//             }}
//             onBlur={handleBlur}
//             onChange={(event) => setInputValue(event.target.value)}
//             InputProps={{
//               placeholder: chips.length === 0 ? 'Select' : '',
//               ...params.InputProps,
//               endAdornment: null,
//             }}
//           />
//         )}
//       />
//     </div>
//   );
// }

// export default App;


// auto code 


// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Chip from '@mui/material/Chip';
// import Image from './image.svg';

// function App() {
//   const [chips, setChips] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleBlur = () => {
//     if (inputValue.trim() !== '') {
//       setChips([...chips, inputValue.trim()]);
//     }
//     setInputValue('');
//   };

//   const handleChipDelete = (chipToDelete) => {
//     setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
//   };

//   // const handleEnterKeyPress = (event) => {
//   //   if (event.key === 'Enter') {
//   //     event.preventDefault();
//   //     if (inputValue.trim() !== '') {
//   //       setChips([...chips, inputValue.trim()]);
//   //     }
//   //     setInputValue('');
//   //   }
//   // };

//   return (
//     <div style={{ width: '350px', backgroundColor: '#ffffff' }}>
//       <Autocomplete
//         multiple
//         options={[]}
//         value={chips}
//         onChange={(event, newValue) => {
//           setChips(newValue);
//         }}
//         freeSolo
//         renderTags={(value, getTagProps) =>
//           value.map((option, index) => (
//             <Chip
//               key={index}
//               label={option}
//               onDelete={() => handleChipDelete(option)}
//               icon={<img src={Image} alt="Icon" />}
//               {...getTagProps({ index })}
//               style={{
//                 margin: '2px',
//                 fontFamily: 'Inter',
//                 fontStyle: 'normal',
//                 fontWeight: 600,
//                 fontSize: '14px',
//                 lineHeight: '16px',
//                 color: '#050E25',
//                 backgroundColor: '#ffffff',
//                 border: '1px solid rgb(194 194 194)',
//               }}
//             />
//           ))
//         }
//         inputValue={inputValue}
//         onInputChange={handleInputChange}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label=""
//             variant="filled"
//             // onKeyDown={handleEnterKeyPress} 
//             onBlur={handleBlur}
//             onChange={(event) => setInputValue(event.target.value)}
//             InputProps={{
//               placeholder: chips.length === 0 ? 'Select' : '',
//               ...params.InputProps,
//               endAdornment: null,
//             }}
//           />
//         )}
//       />
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Chip from '@mui/material/Chip';
// import Image from './image.svg'
// import { makeStyles } from '@mui/styles';
// import ClearIcon from '@mui/icons-material/Clear';
// import { Avatar } from '@mui/material';
// import { lightBlue } from '@mui/material/colors';

// const useStyles = makeStyles((theme) => ({
//   textFieldRoot: {
//     '&.MuiTextField-root': {
//       width: '289px',
//     },
//   },

//   autoCompleteRoot: {
//     '& .MuiButtonBase-root-MuiChip-root': {
//       padding: '4px 8px !important',

//     },
//     '& .MuiFilledInput-root': {
//       padding: '4px 8px !important',
//       backgroundColor: '#e0e0de !important',
//     },
//     '& .MuiFilledInput-input': {
//       padding: '4px 8px !important',
//     },
//     '& .MuiFilledInput-root:before': {
//       borderBottom: '0px solid #ffffff'
//     },
//     '& .MuiFilledInput-root:after': {
//       borderBottom: '2px solid #1976d2'
//     },
//     '& .MuiFilledInput-root:hover': {
//       borderBottom: '1px solid #3874FF',
//     },
//   } 

// }));


// const App = () => {
//   const classes = useStyles()
//   const [chips, setChips] = useState([])
//   const [inputValue, setInputValue] = useState('')
//   const [AvatarName , setAvatarName] = useState('')

//   // let AvatorbackgroundColor
//   // const setBg = () => {
//   //   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   //   AvatorbackgroundColor = "#" + randomColor;
//   //   console.log(AvatorbackgroundColor , "avator")
//   // }

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       addChip()
//     }
//   };

//   const handleBlur = () => {
//     addChip()
//   };

//   const handleDelete = (chip) => {
//     setChips((prevChips) => prevChips.filter((c) => c !== chip))
//   };

//   const addChip = () => {
//     if (inputValue.trim() !== '') {
//       // setBg()
//       //setAvatarName(inputValue.slice(0, 1))
//       setChips([...chips, inputValue.trim()])
//       setInputValue('')
//     }
//   };

//   return (
//     <div>
//       <Autocomplete
//         multiple
//         freeSolo
//         value={chips}
//         onChange={(event, newValue) => setChips(newValue)}
//         inputValue={inputValue}
//         onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
//         options={[]}
//         className= {classes.autoCompleteRoot}
//         style={{display: 'inline'}}
//         renderTags={(value, getTagProps) =>
//           value.map((chip, index) => (
//             <Chip
//               key={index}
//               //icon={<img src={Image} alt="icon" style={{ width: '16px', height: '16px' }} />}
//               avatar={<Avatar style={{backgroundColor: 'lightcyan' , width: '16px', height: '16px', fontSize: '12px' }}>{chip.charAt(0).toUpperCase()}</Avatar>}
//               //variant="outlined"
//               className= {classes.chipRoot}
//               label={chip}
//               onDelete={() => handleDelete(chip)}
//               {...getTagProps({ index })}
//               style={{
//                 fontFamily: 'Inter',
//                 fontStyle: 'normal',
//                 fontWeight: 600,
//                 fontSize: '14px',
//                 lineHeight: '16px',
//                 color: '#050E25',
//                 backgroundColor: '#ffffff',
//                 border: '1px solid #EFF0F1',
//                 // padding: '4px',
//                 // gap: '8px',
//               }}
//               deleteIcon={< ClearIcon style={{fontSize: '16px', color: '#2E2E2E'}}/>} 
//             />
//           ))
//         }
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             className= {classes.textFieldRoot}
//             onKeyDown={handleKeyDown}
//             onBlur={handleBlur}
//             variant="filled"
//             label=""
//             placeholder="Select"
//             InputProps={{
//               ...params.InputProps,
//               endAdornment: null, 
//             }}
//           />
//         )}
//       />
//     </div>
//   );
// }

// export default App

