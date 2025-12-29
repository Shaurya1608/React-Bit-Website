// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import PurchasePage from "./pages/PurchasePage";
import AddToCart from "./pages/AddToCart";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";
import ProductMens from "./pages/ProductMens";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import CartPage from "./pages/cartPage";

function App() {
  return (
    <>
      {/* ✅ Toast System (works everywhere) */}
      <Toaster position="top-right" />

      {/* ✅ App Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/mens" element={<ProductMens />} />
        <Route path="/product/:id" element={<AddToCart />} />

        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/order" element={<Orders />} />

        <Route path="/admin" element={<Admin />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} /> 


        <Route path="/cart" element={<CartPage />} />   
      </Routes>
    </>
  );
}

export default App;
