import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderItem = products.map((product) => {
    const { id, title, price, category, image } = product;
    return (
      <div className="wide column" key={id}>
        <div className="ui cards link">
          <div className="ui card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderItem}</>;
};

export default Product;
