import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleAddNewItem }) => {
  return (
    <form className="addForm" onSubmit={handleAddNewItem}>
      <label htmlFor="addItem">Add item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add an item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" arial-label="addItem">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
