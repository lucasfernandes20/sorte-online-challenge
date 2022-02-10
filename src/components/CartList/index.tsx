import React from 'react'
import CartTable from '../CartTable'
import { CartListContainer, List } from './styles'

const CartList: React.FC = () => {
  return (
    <CartListContainer>
      <h1>Shopping Cart</h1>
      <List>
        <CartTable />
      </List>
    </CartListContainer>
  )
}

export default CartList
