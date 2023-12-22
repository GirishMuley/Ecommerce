import React from "react";
import ProductList from "../features/product/components/ProductList";
import NavBar from "../features/navbar/NavBar";
import Footer from "../features/footer/Footer";

function Home() {
  return (
    <div>
      {/* <NavBar>
        <ProductList></ProductList>
      </NavBar> */}
      <NavBar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default Home;
