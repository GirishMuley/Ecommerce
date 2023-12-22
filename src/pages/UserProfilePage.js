import React from "react";
import NavBar from "../features/navbar/NavBar";
import UserProfile from "../features/user/components/UserProfile";
import Footer from "../features/footer/Footer";

function UserProfilePage() {
  return (
    <div>
      <NavBar />
      <h1 className="mx-auto ml-28 text-2xl ">My Profile</h1>
      <UserProfile />
      <Footer />
    </div>
  );
}

export default UserProfilePage;
