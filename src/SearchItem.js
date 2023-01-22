import React from "react";

const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <form className="addForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="addItem">Search item</label>
      <input
        autoFocus
        id="searchItem"
        type="text"
        placeholder="Search an item"
        required
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
