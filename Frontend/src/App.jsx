// src/App.jsx
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      
      {/* All “normal” pages share MainLayout with navbar */}
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
         <Route path="/product/:id" element={<AddToCart />} />
         <Route path="/order" element={<Orders />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products/mens" element={<ProductMens />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        
        

      </Route>

      {/* Example: a page WITHOUT navbar (e.g. /landing) */}
      {/* <Route path="/landing" element={<LandingPage />} /> */}
    </Routes>
  );
}

export default App;
