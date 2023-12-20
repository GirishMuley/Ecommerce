import React from "react";
import NavBar from "../features/navbar/NavBar";
import AdminProductDetails from "../features/admin/components/AdminProductDetails";

function AdminProductDetailPage() {
  return (
    <div>
      <NavBar>
        <AdminProductDetails></AdminProductDetails>
      </NavBar>
    </div>
  );
}

export default AdminProductDetailPage;
