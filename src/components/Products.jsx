import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state);

  console.log(products);

  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default Products;
