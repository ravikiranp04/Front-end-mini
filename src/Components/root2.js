import React from "react";
import Outer from "./Outer";

function Root({ products, setProduct }) {
  const [search, setSearch] = React.useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <nav className="bg-secondary " style={{height:'60px'}}>
        <h3 className="pt-2">Online Retail Store</h3>
      </nav>
      <input
        type="text"
        className="form-control m-auto mt-3 mb-3 w-50"
        placeholder="Search by product name"
        onChange={handleSearch}
      />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 g-3 p-3">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <div className="col" key={product.id} style={{height:"500px"}}>
              <Outer product={product} setProduct={setProduct} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Root;
