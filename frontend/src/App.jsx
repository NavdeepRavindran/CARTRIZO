import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AboutUs from "./pages/Aboutus";
import RateUs from "./Rate/Rateus";
import SellerDashboard from "./Seller/SellerDashboard";
import ProfileInfo from "./pages/info";
import Profile from "./pages/Profile";
import SellCar from "./SellCars/SellCar";
import UsedCar from "./UsedCars/UsedCar";

// 👇 ADD THIS
import ProductPage from "./Productpage/ProductPage";

// Admin components
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/rate-us" element={<RateUs />} />
      <Route path="/info" element={<ProfileInfo />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sell-cars" element={<SellCar />} />
      <Route path="/used-cars" element={<UsedCar />} />

      {/* ✅ PRODUCT PAGE */}
      <Route path="/product/:id" element={<ProductPage />} />

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/seller/dashboard" element={<SellerDashboard />} />

    </Routes>
  );
}

export default App;
