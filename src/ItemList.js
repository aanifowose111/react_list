import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({ items, handleCheck, deleteItem }) => {
  const styleUl = {
    marginTop: "2rem",
  };
  return (
    <ul style={styleUl}>
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          />
          <label>{item.item}</label>
          <FaTrashAlt
            role="button"
            tabIndex="0"
            onClick={() => deleteItem(item.id)}
            arial-label={`Delete ${item.item}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
