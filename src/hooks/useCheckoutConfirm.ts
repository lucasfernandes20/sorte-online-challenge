import Swal from 'sweetalert2'
import { getProductsAction } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

interface AddressProps {
  street: string
  city: string
  number: string
}

interface CheckoutConfirmProp {
  disableButton: () => boolean
  handleChange: (arg: EventTarget) => void
  lastStep: boolean
  CheckoutConfirm: () => void
  address: AddressProps
}
const useCheckoutConfirm = (): CheckoutConfirmProp => {
  const [address, setaddress] = useState({ street: '', city: '', number: '' })
  const [lastStep, setLastStep] = useState(false)
  const dispatch = useDispatch()

  const CheckoutConfirm = () => {
    const { street, city, number } = address
    Swal.fire({
      icon: 'success',
      title: 'Success, your purchase has been confirmed!',
      html:
        `<p>Street: <span>${street}</span></p>` +
        `<p>City: <span>${city}</span></p>` +
        `<p>Number: <span>${number}</span></p>`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 3500,
      willClose: () => {
        setaddress({ street: '', city: '', number: '' })
        setLastStep(true)
        dispatch(getProductsAction([]))
      }
    })
  }
  const handleChange = target => {
    const { value, name } = target

    setaddress(prevState => ({ ...prevState, [name]: value }))
  }

  const disableButton = () => {
    const { street, city, number } = address

    if (!street || !city || !number) return true
    return false
  }

  return { disableButton, handleChange, lastStep, CheckoutConfirm, address }
}

export default useCheckoutConfirm
