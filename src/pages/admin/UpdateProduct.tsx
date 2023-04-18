import {useState, useEffect} from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Product } from '../../interface/products';
import { useNavigate, useParams } from 'react-router-dom';
type Props = {
    onUpdate: (product: Product) => void,
    products: Product[]
}

const UpdateProduct = (props: Props) => {
    const [product, setProduct] = useState<Product>()
    const {id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const current = props.products.find(item => item.id == id)
        setProduct(current)
    }, [props])

    useEffect(() => {
        setFields()
    }, [product])

    const [form] = Form.useForm()
    const setFields = () => {
        form.setFieldsValue({
            id: product?.id,
            name: product?.name,
            price: product?.price
        })
    }
    const onFinish = (values: any) => {
        props.onUpdate(values)
        navigate('/admin/products')
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      
  return (
      <Form
          form={form}
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
      label="name"
              name="id"
              hidden
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

export default UpdateProduct