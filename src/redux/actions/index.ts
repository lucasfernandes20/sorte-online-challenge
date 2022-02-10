import { action } from 'typesafe-actions'
import { ActionTypes, Product } from '../reducers/types'

interface AddCartProduct {
  type: ActionTypes
  payload: Product
}

interface GetCartProduct {
  type: ActionTypes
  payload: Product[]
}

export const addComputerAction = (data: Product): AddCartProduct =>
  action(ActionTypes.ADD_PRODUCT, data)

export const getProductsAction = (data: Product[]): GetCartProduct =>
  action(ActionTypes.GET_PRODUCT, data)
