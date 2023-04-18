import { Product } from "../interface/products";
import { instance } from "./instance";

export const getAllProduct = () => {
    return instance.get('/products')
}

export const getOneProduct = (id: string | number) => {
    return instance.get('/products/'+ id)
}

export const addProduct = (product: Product) => {
    return instance.post('/products', product)
}

export const updateProduct = (product: Product) => {
    return instance.put('/products/'+ product.id, product)
}

export const removeProduct = (id: string | number) => {
    return instance.delete('/products/'+id)
}