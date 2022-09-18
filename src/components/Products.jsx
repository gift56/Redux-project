import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state);

  const fetchAllProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("errors: ", err);
      });
    console.log(res);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  console.log(products);

  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default Products;
