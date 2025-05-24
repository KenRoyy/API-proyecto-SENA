import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
    try {
        const { orderid, user_id, orderDate, status, total, products } = req.body;

        const newOrder = new Order({
            orderid,
            user_id,
            orderDate,
            status,
            total,
            products
        });

        const savedOrder = await newOrder.save();

        res.status(201).json({
            message: 'Orden creada exitosamente',
            order: savedOrder
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('user_id').exec();

        if (!order) return res.status(404).json({ message: 'Orden no encontrada' });

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user_id').exec();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }
        res.status(200).json({ message: 'Orden eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}