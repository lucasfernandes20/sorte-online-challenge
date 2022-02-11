import { useEffect, useState } from 'react'
import formatPrice from '../utils/formatPrice'
import { useSelector } from 'react-redux'
import { ProductState } from '../redux/reducers/types'

interface SumTotalProp {
  total: string
}

const useSumTotalPrice = (): SumTotalProp => {
  const [total, setTotal] = useState('')
  const state = useSelector((state: ProductState) => state.cartProducts)

  useEffect(() => {
    const sumTotal = state.reduce((acc, cur) => cur.price + acc, 0)
    setTotal(formatPrice(sumTotal))
  }, [state])

  return { total }
}

export default useSumTotalPrice
