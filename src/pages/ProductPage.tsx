import React from 'react'
import { Product } from '../interface/products'
import { Link } from 'react-router-dom'

type Props = {
    products: Product[]
}

const ProductPage = (props: Props) => {
  return (
      <div>
          {props.products.map(product => (
              <Link to={`${product.id}`} > 
                  <div>
                      <h3>{product.name}</h3>
                      <span>{product.price}</span>
                  </div>
              </Link>
          ))}
    </div>
  )
}

export default ProductPage