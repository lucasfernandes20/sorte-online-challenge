// Actions Types

export enum ActionTypes {
  GET_PRODUCT = '@products/GET_PRODUCT',
  ADD_PRODUCT = '@product/ADD_PRODUCT',
  ALTER_PRODUCT = '@product/ALTER_PRODUCT'
}

// Request types

export interface RequestType {
  data?: Product[]
}

// Data Types

export interface Product {
  id: number
  image: string
  title: string
  description: string
  price: number
  priceDiscount: number
  quantity?: number
}

// Product State Types

export interface ProductState {
  readonly cartProducts: Product[]
}
