import React from "react";

const Header = ({ title }) => {
  const headerStyle = {
    backgroundColor: "#f5f6f7",
    color: "#000080",
    padding: "1rem",
  };
  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default title",
};
export default Header;
