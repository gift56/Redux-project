import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchAllProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("errors: ", err);
      });
    dispatch(setProducts(res.data));
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
