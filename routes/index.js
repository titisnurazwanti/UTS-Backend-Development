//import express
import express from "express";
//import controllers
import { getProducts, getProductById, saveProduct, updateProduct, deleteProduct} from "../controllers/productController.js";

//express router
const router = express.Router();

//router get all products
router.get('/', getProducts);
//router get single products
router.get('/:id', getProductById);
//router CREATE product
router.post('/', saveProduct);
//router UPDATE products
router.patch('/:id', updateProduct);
//router DELETE products
router.delete('/:id', deleteProduct);

//export router
export default router;