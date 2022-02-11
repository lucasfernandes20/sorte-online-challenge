import React from 'react'
import { Steps } from 'antd'
import {
  ShoppingCartOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined
} from '@ant-design/icons'
import { BiBuildingHouse } from 'react-icons/bi'

interface StepProp {
  lastStep: boolean
}

const CheckoutStep: React.FC<StepProp> = ({ lastStep }) => {
  const { Step } = Steps
  return (
    <Steps>
      <Step
        status="finish"
        title="Add to Cart"
        icon={<ShoppingCartOutlined />}
      />
      <Step status="finish" title="Confirm" icon={<SolutionOutlined />} />
      <Step
        status={lastStep ? 'finish' : 'process'}
        title="Address"
        icon={lastStep ? <BiBuildingHouse /> : <LoadingOutlined />}
      />
      <Step
        status={lastStep ? 'process' : 'wait'}
        title="Done"
        icon={<SmileOutlined />}
      />
    </Steps>
  )
}

export default CheckoutStep
