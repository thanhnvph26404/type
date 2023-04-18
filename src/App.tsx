import { Route, Routes } from "react-router-dom"
import {useState, useEffect} from 'react'
import ClientLayout from "./pages/layout/ClientLayout"
import ProductPage from "./pages/ProductPage"
import DetailProductPage from "./pages/DetailProductPage"
import ProductManager from "./pages/admin/ProductManager"
import AdminLayout from "./pages/layout/AdminLayout"
import AddProduct from "./pages/admin/AddProduct"
import UpdateProduct from "./pages/admin/UpdateProduct"
import { Product } from "./interface/products"
import { addProduct, getAllProduct, removeProduct, updateProduct } from "./api/products"
function App() {
  
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
   getAllProduct().then(({data}) => setProducts(data))
  }, [])
 
  const handleRemove = (id: string | number) => {
    removeProduct(id).then(() => setProducts(products.filter(item => item.id != id)))
    .then(() => alert('delete successfully'))
  }

  const handleAdd = (product: Product) => {
    addProduct(product).then(() => setProducts([...products, product]))
      .then(() => alert('add successfully'));
  }

  const handleUpdate = (product: Product) => { 
    updateProduct(product).then(() => setProducts(products.map(item => item.id == product.id ? product : item))).then(() => alert('update successfully'));
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<ProductPage products={products} />} />
          <Route path=":id" element={ <DetailProductPage products={products}/>} />
        </Route>
        <Route path="/admin/products" element={<AdminLayout />}>
          <Route index element={<ProductManager products={products} onRemove={handleRemove } /> } />
          <Route path="add" element={<AddProduct onAdd={handleAdd } /> } />
          <Route path="update/:id" element={<UpdateProduct onUpdate={handleUpdate} products={products} /> } />
        </Route>
      </Routes>
    </div>
  )
  }
  
export default App
