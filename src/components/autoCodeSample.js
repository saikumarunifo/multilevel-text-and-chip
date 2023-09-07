import React, { useState, useEffect, useRef } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

function CustomAutocomplete() {
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const dropdown = wrapperRef.current.querySelector('.MuiAutocomplete-paper');
      if (dropdown) {
        const dropdownRect = dropdown.getBoundingClientRect();
        if (dropdownRect.top < 0 || dropdownRect.bottom > window.innerHeight) {
          setOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'];
 
  const handleBlur = () => {
    setOpen(false);
  };

  return (
    <div ref={wrapperRef}>
      <h1 style={{marginBottom: '400px'}}>Test Page</h1>
      <div style={{ height: '100%', overflow: 'auto' }}>
        <p style={{marginTop: '200px', marginBottom: '600px'}}>
          Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Nullam eu justo nec <br/> nisi accumsan
          aliquam vel ut libero. <br/>Praesent euismod euismod elementum. <br/>Quisque nec neque non purus <br/>
          malesuada facilisis. Nulla facilisi.<br/> Proin commodo nulla eget mauris eleifend fermentum. <br/>
          Vivamus blandit venenatis sapien, <br/> nec bibendum nisi. Curabitur accumsan ac tortor in<br/>
          hendrerit. Integer sit amet <br/>nisi nec odio dictum iaculis.
        </p>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Autocomplete
          id="combo-box-demo"
          options={options}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          // open={open}
          // onClose={() => setOpen(false)}
          onBlur={handleBlur}
    />
    </div>
        <p style={{marginTop: '200px', marginBottom: '900px'}}>
          Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Nullam eu justo nec <br/> nisi accumsan
          aliquam vel ut libero. <br/>Praesent euismod euismod elementum. <br/>Quisque nec neque non purus <br/>
          malesuada facilisis. Nulla facilisi.<br/> Proin commodo nulla eget mauris eleifend fermentum. <br/>
          Vivamus blandit venenatis sapien, <br/> nec bibendum nisi. Curabitur accumsan ac tortor in<br/>
          hendrerit. Integer sit amet <br/>nisi nec odio dictum iaculis.
        </p>
      </div>
    </div>
  );
}

export default CustomAutocomplete;


