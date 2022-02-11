import React from 'react'
import { Table } from 'antd'
import { TableContainer } from './styles'
import useTableDataSource from '../../hooks/useTableDataSource'

const CartTable: React.FC = () => {
  const { columns, data } = useTableDataSource()

  return (
    <TableContainer>
      <Table
        columns={columns}
        pagination={false}
        loading={!data}
        dataSource={data}
      />
    </TableContainer>
  )
}

export default CartTable
