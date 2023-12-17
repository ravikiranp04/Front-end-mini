import React from "react";

function Inner({ product }) {
  if (!product) {
    // Handle the case where product is not available
    return <div>No product selected</div>;
  }

  return (
    <div id="product" className="p-5 border-dark  h-75 my-auto">
      <div className=" my-auto img-side text-center d-flex justify-content-around p-3">
        <div className="" > 
          <img src={product.image} alt="Product" className="h-75 my-auto m-2" style={{width:'658px'}}/>
        </div>
        <div className="my-auto bg-success text-center p-4 rounded-5"style={{width:"700px"}}>
          <h2 className="mb-1">{product.title}</h2>
          <h4>Price: {product.price}$</h4>
          <p className="fs-3">{product.description}</p>
          <h2>Rating: {product.rating.rate} / 5</h2>
        </div>
      </div>
    </div>
  );
}

export default Inner;
