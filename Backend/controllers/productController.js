// Backend/controllers/productController.js
import Product from "../models/product.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();  // uses Mongoose save()[web:88][web:95]
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};