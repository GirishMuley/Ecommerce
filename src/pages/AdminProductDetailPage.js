import React from "react";
import NavBar from "../features/navbar/NavBar";
import AdminProductDetails from "../features/admin/components/AdminProductDetails";
import Footer from "../features/footer/Footer";

function AdminProductDetailPage() {
  return (
    <div>
      <NavBar />
      <AdminProductDetails />
      <Footer />
    </div>
  );
}

export default AdminProductDetailPage;
