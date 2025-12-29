import Order from "../models/Order.js";



export const createOrder = async (req, res) => {
  try {
    const { productId, amount } = req.body;

    if (!productId || !amount) {
      return res.status(400).json({ message: "Product & amount are required" });
    }

    const order = new Order({
      productId,
      amount,
      user: req.user.id,      // attach logged-in user
      email: req.user.email,  // use email from token
      name: req.user.name     // optional
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getOrders = async (req, res)=>{
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}