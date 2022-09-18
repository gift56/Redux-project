import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "./Product";

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
    <div className="ui grid container four">
      <div className="four column row">
        <Product />
      </div>
    </div>
  );
};

export default Products;
