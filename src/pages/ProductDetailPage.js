import React from "react";
import NavBar from "../features/navbar/NavBar";
import ProductDetails from "../features/product/components/ProductDetails";
import Footer from "../features/footer/Footer";

function ProductDetailPage() {
  return (
    <div>
      <NavBar />
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
