import React from 'react'
import CartList from '../components/CartList'
import CheckoutForm from '../components/CheckoutForm'
import Header from '../components/Header'
import { Container } from '../styles/pages/Home'

const shoppingCart: React.FC = () => {
  return (
    <Container>
      <Header />
      <CartList />
      <CheckoutForm />
    </Container>
  )
}

export default shoppingCart
