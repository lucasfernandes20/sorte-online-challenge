import { notification } from 'antd'
import Router from 'next/router'
import { Product } from '../redux/reducers/types'

interface notificationProps {
  openNotification: (arg: Product) => void
}

const useNotificationCart = (): notificationProps => {
  const openNotification = product => {
    notification.open({
      message: `${product.title} has been added to cart!`,
      description: 'Click here to see your cart.',
      onClick: () => {
        Router.push('/shoppingcart')
      }
    })
  }

  return { openNotification }
}

export default useNotificationCart
