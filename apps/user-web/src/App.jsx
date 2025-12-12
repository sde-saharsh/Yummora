import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Restaurant from "./pages/Restaurant.jsx";
import Cart from "./pages/Cart.jsx";
import Orders from "./pages/Orders.jsx";
import Rewards from "./pages/Rewards.jsx";
import UserAccount from "./pages/UserAccount.jsx";
import Navbar from "./components/Navbar.jsx";
import Support from "./pages/Support.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Page Content (padding prevents overlap) */}
      <div className="pt-20 px-4">  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/support" element={<Support />} />
          <Route path="/useraccount" element={<UserAccount />} />
        </Routes>
      </div>

    </div>
  );
};

export default App;
