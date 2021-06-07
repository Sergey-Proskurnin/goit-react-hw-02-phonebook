import React from "react";
import { v4 as uuidv4 } from "uuid";

const filterInputId = uuidv4();

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label htmlFor={filterInputId}>
      Find contacts by name and number
      <input
        type="text"
        value={filter}
        onChange={onChangeFilter}
        id={filterInputId}
      />
    </label>
  );
};

export default Filter;
