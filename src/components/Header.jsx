import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="">
        <Link to="/" style={{ color: "black" }}>
          <h2>FreeShop</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
