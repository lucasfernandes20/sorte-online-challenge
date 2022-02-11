import React from 'react'
import useCheckoutConfirm from '../../hooks/useCheckoutConfirm'
import CheckoutStep from '../CheckoutStep'
import {
  CheckoutFormContainer,
  Title,
  Form,
  Label,
  Input,
  ConfirmButton,
  Div
} from './styles'

const CheckoutForm: React.FC = () => {
  const { disableButton, handleChange, lastStep, CheckoutConfirm, address } =
    useCheckoutConfirm()

  return (
    <CheckoutFormContainer>
      <Title>Checkout Address</Title>
      <Form>
        <CheckoutStep lastStep={lastStep} />
        <Div>
          <Label>
            Street
            <Input
              name="street"
              type="text"
              placeholder="Type your Street"
              value={address.street}
              onChange={({ target }) => handleChange(target)}
            />
          </Label>
          <Label>
            City
            <Input
              name="city"
              type="text"
              placeholder="Type your City"
              value={address.city}
              onChange={({ target }) => handleChange(target)}
            />
          </Label>
          <Label>
            House Number
            <Input
              name="number"
              type="number"
              placeholder="Type your house number"
              value={address.number}
              onChange={({ target }) => handleChange(target)}
            />
          </Label>
        </Div>
        <ConfirmButton
          type="button"
          disabled={disableButton()}
          onClick={() => CheckoutConfirm()}
        >
          Confirm
        </ConfirmButton>
      </Form>
    </CheckoutFormContainer>
  )
}

export default CheckoutForm
