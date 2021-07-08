import React from "react";
import "./styles.scss";
import Logo from "../../assests/45d.jpg";

function Header() {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="ol" />
        </div>
      </div>
    </header>
  );
}

export default Header;
