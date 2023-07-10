import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

const userList = [
  { id: 1, name: "name 1" },
  { id: 2, name: "name 2" },
  { id: 3, name: "name 3" }
];

const AutocompleteSample = () => {
  const [users, setUsers] = useState([]);

  const handleChange = (event, newValue) => {
    let newUser = newValue.map(el =>
      typeof el === "string" ? { id: -1, name: el } : el
    );
    setUsers(newUser);
  };

  const renderTags = (value, getTagProps) =>
    value.map((option, index) => (
      <Chip
        variant="outlined"
        label={option.name}
        {...getTagProps({ index })}
      />
    ));

  return (
    <div>
      <br />
      <Autocomplete
        multiple
        freeSolo
        value={users}
        onChange={handleChange}
        renderTags={renderTags}
        id="controllable-states-demo"
        options={userList}
        getOptionLabel={option => option.name}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Controllable" variant="outlined" />
        )}
      />
    </div>
  );
};

export default AutocompleteSample;
