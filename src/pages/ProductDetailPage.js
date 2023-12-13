import React from "react";
import NavBar from "../features/navbar/NavBar";
import ProductDetails from "../features/product/components/ProductDetails";

function ProductDetailPage() {
  return (
    <div>
      <NavBar>
        <ProductDetails></ProductDetails>
      </NavBar>
    </div>
  );
}

export default ProductDetailPage;
