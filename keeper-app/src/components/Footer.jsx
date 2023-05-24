import React from "react";

const date = new Date();
const Year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>copyright @ {Year}</p>
    </footer>
  );
}

export default Footer;
