//import models
import Product from "../models/Product.js";

// function get All Products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(req.params);
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
}

//function get single product
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

//function create product
export const saveProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const saveProduct = await product.save();
        res.status(201).json(saveProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//function update product
export const updateProduct = async (req, res) => {
    const cekId = await Product.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const updateProduct = await Product.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(400).json(updateProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//function delete product
export const deleteProduct = async (req, res) => {
    const cekId = await Product.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deleteProduct = await Product.deleteOne({_id: req.params.id});
        res.status(200).json(deleteProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}