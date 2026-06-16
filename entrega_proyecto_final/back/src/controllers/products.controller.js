const products = [
    {id: 1, name: 'Product 1', price: 10.99},
    {id: 2, name: 'Product 2', price: 19.99},
    {id: 3, name: 'Product 3', price: 5.99}
];

import { fetchProducts} from "../models/Product.js";

export const getProducts = async (req, res) => {
    const products = await fetchProducts();
    res.json(products);
};

export const getProductById = (req, res) => {
    
    const id = Number(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({message: 'Producto no encontrado',

        });
    }
    res.json(product);
};





export const createProduct = (req, res) => {
    const {name, price} = req.body;
    if (!name || !price) {
        return res.status(400).json({message: 'Nombre y precio son requeridos',});
    }
    const newProduct = {
        id: products.length + 1,
        name,
        price,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);

};

export const deleteProduct = (req, res) => {
    const id = Number(req.params.id);
    const productIndex = products.findIndex(product => product.id === id);

    if (productIndex === -1) {
        return res.status(404).json({message: 'Producto no encontrado',});
    }



 const deleteProduct = products.splice(productIndex, 1);

res.json({
    
    message: 'Producto eliminado',
    product: deleteProduct[0],  
});

};
