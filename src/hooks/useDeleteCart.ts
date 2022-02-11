import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from '../redux/actions'
import { ProductState } from '../redux/reducers/types'

interface DeleteCartProp {
  deleteCart: () => void
  deleteItem: (arg: number) => void
}

const useDeleteCart = (): DeleteCartProp => {
  const dispatch = useDispatch()
  const state = useSelector((state: ProductState) => state.cartProducts)

  const deleteCart = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure you want to delete all items from the cart?',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete!',
      cancelButtonText: 'No'
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(getProductsAction([]))
        Swal.fire('Carrinho limpo!', '', 'success')
      }
    })
  }

  const deleteItem = (id: number) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure you want to delete this item from the cart?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(result => {
      if (result.isConfirmed) {
        const removedItem = state.filter(e => e.id !== id)
        dispatch(getProductsAction(removedItem))
      }
    })
  }

  return { deleteCart, deleteItem }
}

export default useDeleteCart
