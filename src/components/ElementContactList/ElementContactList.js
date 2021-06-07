import React from "react";

const ElementContactList = ({ contacts, deleteContact }) => {
  return contacts.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button
          type="button"
          className="btnList"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ElementContactList;
