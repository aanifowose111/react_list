import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <p>
        {length === 1
          ? "1 item in the shopping cart "
          : length === 0
          ? "Cart is empty "
          : `${length} items in the shopping cart `}
        | Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
