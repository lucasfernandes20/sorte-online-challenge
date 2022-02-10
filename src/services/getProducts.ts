import axios from 'axios'
import { Product } from '../redux/reducers/types'

interface ServerResponse {
  data: Product[]
}

const getProducts = async (): Promise<ServerResponse> => {
  try {
    const result = await axios.get('http://localhost:8080/products')

    return result.data
  } catch (err) {
    console.log(err)
  }
}

export default getProducts
