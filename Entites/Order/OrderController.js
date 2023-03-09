import Order from './OrderModel.js';
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
dotenv.config();
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_KEY);
import CC from 'currency-converter-lt';

export default class OrderControllzer {
  constructor() {}

  static createOrder = asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      //   assemblyPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error('No order items');
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        // assemblyPrice,
        shippingPrice,
        totalPrice,
      });
      const createOrder = await order.save();
      res.status(201).json(createOrder);
    }
  });

  static getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({}).sort({ _id: -1 }).populate('user', 'id name email');
    res.json(orders);
  });

  static getOrdersByUser = asyncHandler(async (req, res) => {
    const order = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    res.json(order);
  });

  static getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error('Order Not Found');
    }
  });

  static isDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error('Order Not Found');
    }
  });

  static isPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();

      const currencyConverter = new CC({
        from: 'BYN',
        to: 'USD',
        amount: req.body.amount,
      });
      currencyConverter.convert().then((usdAmount) => {
        stripe.charges.create(
          {
            source: req.body.tokenId,
            amount: usdAmount * 100,
            currency: 'USD',
          },
          (stripeErr, stripeRes) => {
            if (stripeErr) {
              res.status(500).json(stripeErr);
            }
          },
        );
      });
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error('Order Not Found');
    }
  });
}
