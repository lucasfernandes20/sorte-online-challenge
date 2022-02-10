import React from 'react'
import CartList from '../components/CartList'
import Header from '../components/Header'
import { Container } from '../styles/pages/Home'

const shoppingCart: React.FC = () => {
  return (
    <Container>
      <Header />
      <CartList />
    </Container>
  )
}

export default shoppingCart
