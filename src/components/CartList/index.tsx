import React from 'react'
import CartTable from '../CartTable'
import {
  CartListContainer,
  Paper,
  Title,
  CartHeader,
  RemoveCartButton,
  TotalPrice
} from './styles'
import useDeleteCart from '../../hooks/useDeleteCart'
import useSumTotalPrice from '../../hooks/useSumTotalPrice'

const CartList: React.FC = () => {
  const { deleteCart } = useDeleteCart()
  const { total } = useSumTotalPrice()

  return (
    <CartListContainer>
      <CartHeader>
        <Title>My Shopping Cart</Title>
        <RemoveCartButton type="button" onClick={() => deleteCart()}>
          Delete Cart
        </RemoveCartButton>
      </CartHeader>
      <Paper>
        <CartTable />
      </Paper>
      <TotalPrice>{total}</TotalPrice>
    </CartListContainer>
  )
}

export default CartList
