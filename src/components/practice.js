import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import "../App.css"; // Import the CSS file for styling

const AutocompleteSample = () => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddUser = () => {
    if (inputValue.trim() !== "") {
      const newUser = { id: -1, name: inputValue };
      setUsers([...users, newUser]);
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDelete = (userToDelete) => {
    const newUsers = users.filter(user => user !== userToDelete);
    setUsers(newUsers);
  };

  return (
    <div>
      <br />
      <div className="textfield-container">
        <TextField
          value={inputValue}
          onChange={handleChange}
          label="Add user"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <div className="chips-container">
                {users.map((user) => (
                  <Chip
                    key={user.id}
                    variant="outlined"
                    label={user.name}
                    onDelete={() => handleDelete(user)}
                    className="chip"
                  />
                ))}
              </div>
            )
          }}
        />
      </div>
      <button onClick={handleAddUser}>Add</button>
    </div>
  );
};

export default AutocompleteSample;
