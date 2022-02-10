import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductState } from '../../redux/reducers/types'
import { Table } from 'antd'
import { Preview, TableContainer, DeleteButton } from './styles'

const CartTable: React.FC = () => {
  const [data, setData] = useState([])
  const state = useSelector((state: ProductState) => state.cartProducts)

  const deleteFromCart = () => {}

  const fillDataSource = () => {
    const dataSource = []
    state.map(product => {
      const obj = {
        key: product.id,
        Preview: product.image,
        Product: product.title,
        Description: product.description,
        Price: `$ ${product.price}`,
        Quantity: product.quantity,
        Delete: product.id
      }
      dataSource.push(obj)
    })
    setData(dataSource)
  }

  useEffect(() => {
    fillDataSource()
  }, [state])

  const columns = [
    {
      title: 'key',
      dataIndex: 'key',
      key: 'key',
      sorter: (a, b) => a.key - b.key,
      sortDirections: ['ascend']
    },
    {
      title: 'Preview',
      dataIndex: 'Preview',
      key: 'Preview',
      render: imageSource => <Preview src={imageSource} alt="product" />
    },
    {
      title: 'Product',
      dataIndex: 'Product',
      key: 'Product'
    },
    {
      title: 'Description',
      dataIndex: 'Description',
      key: 'Description'
    },
    {
      title: 'Price',
      dataIndex: 'Price',
      key: 'Price',
      width: '150px',
      sorter: (a, b) => a.Price - b.Price,
      sortDirections: ['ascend']
    },
    {
      title: 'Quantity',
      dataIndex: 'Quantity',
      key: 'Quantity'
    },
    {
      title: 'Delete',
      dataIndex: 'Delete',
      key: 'Delete',
      render: id => <DeleteButton type="button">Delete</DeleteButton>
    }
  ]

  return (
    <TableContainer>
      <Table
        pagination={false}
        loading={!data}
        dataSource={data}
        columns={columns}
      />
    </TableContainer>
  )
}

export default CartTable
