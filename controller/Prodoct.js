const mongoose = require("mongoose");
const Product = require("../model/productschema");

const getProduct = (req, res) => {
  Product.find()
    .then((payload) => {
      // res.send("New Product Has been Added Into Your DataBase.");
      res.json(payload);
    })
    .catch((err) => {
      res.send(err);
    });
};
const createProduct = (req, res) => {
  const newproduct = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    rating: req.body.rating,
    stock: req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
  });
  newproduct
    .save()
    .then((newproduct) => {
      res.send("New Product Has been Added Into Your DataBase.");
    })
    .catch((err) => {
      res.send(err);
    });
};
const deleteProduct = (req, res) => {
   let deleteItem={}
   let id=req.params._id;
     console.log("d",id);
  Product.deleteOne({_id:id})
    .exec()
    .then((payload) => {
      res.send("the product is delete") 
      console.log("the result:",payload);
    })
    .catch((err) => {
      console.log(err);
    });
   
};

module.exports = {
  getProduct,
  createProduct,
  deleteProduct,
};
