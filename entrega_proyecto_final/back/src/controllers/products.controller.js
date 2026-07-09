
import { createProductModel, getProductsModel, getProductByIdModel, deleteProductModel} from "../models/product.js";

export const getProducts = async (req, res) => {
    const products = await getProductsModel();
    res.json(products);
};

export const getProductById = async (req, res) => {
    
    const { id } = req.params;

    const product = await getProductByIdModel(id);

    if (!product) {
        return res.status(404).json({message: 'Producto no encontrado',});
    }

    res.json(product);
};





export const createProduct = async (req, res) => {
    const {name, price} = req.body;

    if (!name || !price) {
        return res.status(422).json({message: 'Nombre y precio son requeridos',});
    }
    const newProduct = await createProductModel({ name, price, });

    res.status(201).json(newProduct);

};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await deleteProductModel(id);

    if (!deletedProduct) {
        return res.status(404).json({message: 'Producto no encontrado',});
    }


res.json({
    
    message: 'Producto eliminado',
    product: deletedProduct,  
});

};
