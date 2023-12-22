import React from "react";
import NavBar from "../features/navbar/NavBar";
import ProductForm from "../features/admin/components/ProductForm";
import Footer from "../features/footer/Footer";

function AdminProductFormPage() {
  return (
    <div>
      <NavBar />
      <ProductForm />
      <Footer />
    </div>
  );
}

export default AdminProductFormPage;
