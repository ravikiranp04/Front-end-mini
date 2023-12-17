import React from "react";
import { Link } from "react-router-dom";

function Outer({ product, setProduct }) {
  function handleClick() {
    setProduct(product);
  }

  return (
    <div className="card-body bg-dark rounded text-white h-100" >
      <img
        src={product.image}
        alt="Card-Display"
        className="card-img-top card-images  h-50 mb-1 mt-2 mb-3 rounded-5" style={{width:"290px"}}
      />
      <div className="w-100" style={{height:"70px"}}>
      <b className="my-auto">
        {product.title.length > 79
          ? product.title.slice(0, 80) + "..."
          : product.title}
      </b>
      </div>
      <div className="card-footer text-center mt-5">
        <Link
          to={`/${product.id}`}
          id="btn-details"
          className="btn btn-success"
          onClick={handleClick}
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Outer;
