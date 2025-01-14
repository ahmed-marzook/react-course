import React from "react";
import PropTypes from "prop-types";
import trollFace from "../../assets/Troll-Face.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={trollFace} />
      <h1>Meme Generator</h1>
    </header>
  );
}

Header.propTypes = {};

export default Header;
