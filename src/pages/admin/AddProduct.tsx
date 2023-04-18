import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Product } from '../../interface/products';
import { useNavigate } from 'react-router-dom';
type Props = {
    onAdd: (product: Product) => void
}


const AddProduct = (props: Props) => {
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        props.onAdd(values)
        navigate('/admin/products')
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="name"
      name="name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="price"
      name="price"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input />
    </Form.Item>

    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddProduct