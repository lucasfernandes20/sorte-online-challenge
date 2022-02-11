import styled from 'styled-components'

interface ButtonProps {
  disabled: boolean
}

export const CheckoutFormContainer = styled.section`
  width: 100vw;
  max-width: 1024px;
  margin: 50px auto;
  padding: 10px;
`
export const Title = styled.h1`
  color: gray;
`
export const Form = styled.div`
  width: 100%;
  box-shadow: 0px 1px 15px rgba(99, 99, 99, 0.3);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 768px) {
    align-items: center;
  }
`
export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  @media (min-width: 768px) {
    width: 30%;
  }
`
export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 4px;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 3px;
`
export const ConfirmButton = styled.button<ButtonProps>`
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => (props.disabled ? 'lightgray' : '#d65a29')};
  color: #ffff;
  font-size: 20px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 30%;
  }
`
