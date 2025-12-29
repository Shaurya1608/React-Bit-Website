import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     description: String,
//     price: { type: Number, required: true },
//     image: String,
//     category: {
//       type: String,
//       enum: ["mens", "womens", "kids", "all"], // or whatever you want
//       required: true,
//       default: "all",
//     },
//   },
  
//   { timestamps: true }
// );

// const Product = mongoose.model("Product", productSchema);
// export default Product;
