import React from "react";
import NavBar from "../features/navbar/NavBar";
import UserOrders from "../features/user/components/UserOrders";
import Footer from "../features/footer/Footer";

function UserOrderPage() {
  return (
    <div>
      <NavBar />
      <h1 className="ml-28 text-2xl ">My Orders</h1>
      <UserOrders />
      <Footer />
    </div>
  );
}

export default UserOrderPage;
