import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/" style={{ color: "black" }}>
          <h2 style={{ padding: "12px" }}>FreeShop</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
