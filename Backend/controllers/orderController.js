import Order from "../models/Order.js";



export const createOrder = async (req , res)=>{
    try {
        const{productId, name, email, amount} = req.body;
            const order =  new Order({
            productId,
            name,
            email,
            amount
        })
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getOrders = async (req, res)=>{
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}