import React from "react";
import styles from "./productCard.module.css";
import AddtoCart from "./AddtoCart";

const ProductCard = () => {
  return (
    <>
      {/* <button className="btn btn-primary">click</button> */}
      <div className='btn btn-primary'>
        <AddtoCart />
      </div>
    </>
  );
};

export default ProductCard;
