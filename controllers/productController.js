const Product = require("../models/Product");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } 
  catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } 
  catch (error) {
    next(error);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const { name, price, description, stock } = req.body;

    if (!name || !price || !stock) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const product = await Product.create({
      name,
      price,
      description,
      stock
    });

    res.status(201).json(product);
  } 
  catch (error) {
    next(error);
  }
};
