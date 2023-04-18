import React from 'react'
import { Product } from '../../interface/products'

type Props = {

    products: Product[],
    onRemove: (id: string | number) => void
}

import { Space, Table,Button } from 'antd';
import { Link } from 'react-router-dom';

const { Column, ColumnGroup } = Table;

interface DataType {
  id: string | number;
    name: string;
    price: number;
    cateId: string | number
}



const ProductManager = (props: Props) => {
    const data: DataType[] = props.products.map(item => {
        return {
            id: item.id,
            name: item.name,
            price: item.price,
            cateId: item.cateId,
        }
    })
    const removeProduct = (id: string | number) => {
        if (confirm('Are you sure you want to remove')){
            props.onRemove(id)
        }
        
    }
  return (
      <div>
          <Button type="primary" danger>
              <Link to={'add'}>Add</Link>
      
    </Button>
          <Table dataSource={data}>
          
    <ColumnGroup title="Name">
      <Column title="Name" dataIndex="name" key="name" />
      
    </ColumnGroup>
    <Column title="Price" dataIndex="price" key="price" />
    <Column title="CateId" dataIndex="cateId" key="cateId" />
    
    <Column
      title="Action"
      key="action"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <Button type="primary" danger onClick={() => removeProduct(record.id)}>
      Delete
    </Button>
              <Button type="primary" danger>
                  <Link to={`update/${record.id}`}>
                  edit
                  </Link>
     
    </Button>
        </Space>
      )}
    />
  </Table>
      </div>
  )
}

export default ProductManager