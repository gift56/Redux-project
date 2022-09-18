import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "./Product";
import "../App.css";

const Products = () => {
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

  return (
    <div className="ui grid container">
      <div className="four column row mt-6">
        <Product />
      </div>
    </div>
  );
};

export default Products;
