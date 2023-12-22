import React from "react";
import NavBar from "../features/navbar/NavBar";
import AdminProductList from "../features/admin/components/AdminProductList";
import Footer from "../features/footer/Footer";

function AdminHome() {
  return (
    <div>
      <NavBar />
      <AdminProductList />
      <Footer />
    </div>
  );
}

export default AdminHome;
