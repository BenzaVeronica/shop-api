import Product from './ProductModel.js';
import asyncHandler from 'express-async-handler';

export default class ProductController {
  constructor() {}

  static getProducts = asyncHandler(async (req, res) => {
    const pageSize = 9;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {};
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  });

  static getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ _id: -1 });
    res.json({ products });
  });

  static createProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, countInStock } = req.body;
    const productExist = await Product.findOne({ name });
    if (productExist) {
      res.status(400);
      throw new Error('Заголовок товара уже существует ');
    } else {
      const product = new Product({
        name,
        price,
        description,
        image,
        countInStock,
        user: req.user._id,
      });
      if (product) {
        const createdproduct = await product.save();
        res.status(201).json(createdproduct);
      } else {
        res.status(400);
        throw new Error('Неправильные данные товара');
      }
    }
  });

  static deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: 'Товар удален' });
    } else {
      res.status(404);
      throw new Error('Товар не найден');
    }
  });

  static updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, countInStock } = req.body;
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.price = price || product.price;
      product.description = description || product.description;
      product.image = image || product.image;
      product.countInStock = countInStock || product.countInStock;
      const updatedproduct = await product.save();
      res.json(updatedproduct);
    } else {
      res.status(404);
      throw new Error('Товар не найден');
    }
  });

  static getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Товар не найден');
    }
  });

  static createReviewByProduct = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString(),
      );
      if (alreadyReviewed) {
        res.status(400);
        throw new Error('Уже есть отзыв на этот товар');
      }
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };

      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

      await product.save();
      res.status(201).json({ message: 'Отзыв добавлен' });
    } else {
      res.status(404);
      throw new Error('Товар не найден');
    }
  });
}
