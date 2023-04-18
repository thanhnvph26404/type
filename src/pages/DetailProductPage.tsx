import React from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../interface/products'

type Props = {
    products: Product[]
}

const DetailProductPage = (props: Props) => {

    const {id} = useParams()
    const product = props.products.find(item => item.id == id)
    
  return (
      <div>
          <h1>{product?.name}</h1>
          <p>{product?.price}</p>
          <span>{product?.cateId }</span>
    </div>
  )
}

export default DetailProductPage