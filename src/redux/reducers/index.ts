import { Reducer } from 'redux'
import { ProductState, ActionTypes } from './types'

const INITIAL_STATE: ProductState = {
  cartProducts: []
}

export const cartProducts: Reducer<ProductState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload]
      }
    case ActionTypes.GET_PRODUCT:
      return {
        ...state,
        cartProducts: action.payload
      }
    default:
      return state
  }
}
