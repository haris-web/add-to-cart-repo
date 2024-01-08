const mongoose = require("mongoose");
const Product = require("../model/productschema");
const { listnotMessage, deleteCartMessage, addCartMessage } = require("../model/constant");

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
      res.send(`${addCartMessage}`);
    })
    .catch((err) => {
      res.send(err);
    });
};
const deleteProduct = (req, res) => {
  let id = req.params.id;
  Product.findById(id).exec()
  .then((payload)=>{
    if(!payload){
      console.log("w");
      return res.send(`${listnotMessage}`)
    }
    else{
      Product.deleteOne({_id:id}).exec()
      .then((item)=>{
        res.send(`${deleteCartMessage}`)
      }).catch((err)=>{
        res.send(err)
      })
    }
  }
  ).catch((err)=>{
    res.send(err)
  });
};
const updateProduct = (req, res) => {
  let id = req.params.id;
  console.log(id);

  Product.findByIdAndUpdate(id, req.body, { new: true }) // { new: true } returns the updated document
    .then((updatedProduct) => {
      if (!updatedProduct) {
        return res.send(`${listnotMessage} not updated`); // Assuming listnotMessage is defined elsewhere
      } else {
        return res.send("The product has been updated successfully");
      }
    })
    .catch((err) => {
      console.error(err);
      return res.send("Error updating product");
    });
};


module.exports = {
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
