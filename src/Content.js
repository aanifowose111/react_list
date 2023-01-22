import React from "react";
// import { useState } from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, deleteItem }) => {
  // const [name, setName] = useState("David");
  // const getName = () => {
  //   let names = ["Abiodun", "Lilian", "David", "Daniel", "Debby"];
  //   let intNum = Math.floor(Math.random() * 5);
  //   return setName(names[intNum]);
  // };

  return (
    <>
      {/* <p>Hello {name} Anifowose PhD</p>
      <button className="btn" onClick={getName}>
        Click me
      </button> */}

      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          deleteItem={deleteItem}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </>
  );
};

export default Content;
