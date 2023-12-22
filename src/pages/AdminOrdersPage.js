import React from "react";
import NavBar from "../features/navbar/NavBar";
import AdminOrders from "../features/admin/components/AdminOrders";
import Footer from "../features/footer/Footer";

function AdminOrdersPage() {
  return (
    <div>
      <NavBar />
      <AdminOrders />
      <Footer />
    </div>
  );
}

export default AdminOrdersPage;
