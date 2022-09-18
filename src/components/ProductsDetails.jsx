import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductsDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchSingleProduct = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("ERR", err));

    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [productId]);
  return <div>ProductsDetails</div>;
};

export default ProductsDetails;
