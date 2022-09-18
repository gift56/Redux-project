import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state);
  return (
    <div className="four column wide">
      <div className="ui link cards"></div>
    </div>
  );
};

export default Product;
