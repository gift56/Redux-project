import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state);

  console.log(products);

  return (
    <div className="ui grid container">
      <h1>Products</h1>
    </div>
  );
};

export default Products;