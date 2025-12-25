// src/App.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import PurchasePage from "./pages/PurchasePage";

function App() {
  return (
    <Routes>
      
      {/* All “normal” pages share MainLayout with navbar */}
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/purchase" element={<PurchasePage />} />
      </Route>

      {/* Example: a page WITHOUT navbar (e.g. /landing) */}
      {/* <Route path="/landing" element={<LandingPage />} /> */}
    </Routes>
  );
}

export default App;
