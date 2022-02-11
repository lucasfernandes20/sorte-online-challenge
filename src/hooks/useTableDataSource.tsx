import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductState } from '../redux/reducers/types'
import { Preview, DeleteButton } from '../components/CartTable/styles'
import { ColumnsType } from 'antd/es/table'
import useDeleteCart from './useDeleteCart'
interface Product {
  key?: number
  Preview: string
  Product: string
  Description: string
  Price: number
  Quantity: number
  Delete: number
}

interface TableSourceProp {
  columns: ColumnsType<Product>
  data: Product[]
}

const useTableDataSource = (): TableSourceProp => {
  const [data, setData] = useState([])
  const state = useSelector((state: ProductState) => state.cartProducts)
  const { deleteItem } = useDeleteCart()

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

  const columns: ColumnsType<Product> = [
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
      width: '150px'
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
      render: id => (
        <DeleteButton onClick={() => deleteItem(id)} type="button">
          Delete
        </DeleteButton>
      )
    }
  ]

  return { columns, data }
}
export default useTableDataSource
