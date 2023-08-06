const Product = require("../../model/product");

// FETCH all product from DB
module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    const productList = [];
    for (let prod of products) {
      productList.push({
        id: prod._id,
        name: prod.name,
        quantity: prod.quantity,
      });
    }
    return res.json({ data: { products: [...productList] } });
  } catch (err) {
    return res.status(500).json({
      error: {
        message: "Internal server error",
        code: err,
      },
    });
  }
};

// Create a product in DB
module.exports.create = async (req, res) => {
  try {
    const product = await Product.create(req.body.product);
    return res.json({
      data: { product: { name: product.name, quantity: product.quantity } },
    });
  } catch (err) {
    return res.status(500).json({
      error: {
        message: "Internal server error",
        code: err,
      },
    });
  }
};

// Update the quantity of product in DB
module.exports.update = async (req, res) => {
  try {
    const number = req.query.number;
    const product = await Product.findById(req.params.id);
    product.quantity = number;
    const updatedProduct = await product.save();
    return res.json({
      data: {
        product: {
          id: updatedProduct._id,
          name: updatedProduct.name,
          quantity: updatedProduct.quantity,
        },
      },
    });
  } catch (err) {
    return res.status(500).json({
      error: {
        message: "Internal server error",
        code: err,
      },
    });
  }
};

// DElETE the product for pass id from DB
module.exports.delete = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const resp = await product.deleteOne();
    res.json({
      data: {
        message: "product deleted",
      },
    });
  } catch (err) {
    return res.status(500).json({
      error: {
        message: "Internal server error",
        code: err,
      },
    });
  }
};
