import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useNotificationCart from '../../hooks/useNotificationCart'
import { addComputerAction } from '../../redux/actions'
import { Product, ProductState } from '../../redux/reducers/types'
import {
  CardContainer,
  Img,
  Title,
  Information,
  Description,
  PriceContainer,
  Price,
  Discount,
  CartButton
} from './styles'

interface CardProp {
  product: Product
}

const computerCard: React.FC<CardProp> = ({ product }) => {
  const [inCart, setInCart] = useState({ inCart: false, msg: 'Add to cart' })
  const { openNotification } = useNotificationCart()
  const dispatch = useDispatch()
  const cartState = useSelector((state: ProductState) => state.cartProducts)

  const dispatchProduct = () => {
    product.quantity = 1

    dispatch(addComputerAction(product))

    return openNotification(product)
  }

  const findComputerInCart = () => {
    const alreadyInCart = cartState.some(e => e.id === product.id)

    if (alreadyInCart) return setInCart({ inCart: true, msg: 'in the cart' })

    return setInCart({ inCart: false, msg: 'Add to cart' })
  }

  useEffect(() => {
    findComputerInCart()
  }, [cartState])

  return (
    <CardContainer>
      <Img src={product.image} alt="product" />
      <Information>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <PriceContainer>
          <Price>
            $ <span>{product.price}</span>
          </Price>
          <Discount>
            {product.priceDiscount === 0 ? null : product.priceDiscount}
          </Discount>
        </PriceContainer>
        <CartButton
          type="button"
          onClick={() => dispatchProduct()}
          inCart={inCart.inCart}
          disabled={inCart.inCart}
        >
          {inCart.msg}
        </CartButton>
      </Information>
    </CardContainer>
  )
}

export default computerCard
