import styled from 'styled-components'

interface buttonProp {
  inCart: boolean
}

export const CardContainer = styled.div`
  width: 44%;
  height: 340px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 15px rgba(99, 99, 99, 0.3);
  border-radius: 4px;
  position: relative;
  @media (min-width: 768px) {
    width: 220px;
    height: 400px;
  }
`

export const Img = styled.img`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  margin-bottom: 15px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`

export const Information = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 18px;
  color: #bb2a7d;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    font-size: 23px;
  }
`

export const Description = styled.p`
  text-align: center;
  @media (min-width: 768px) {
    font-size: 15px;
    align-self: flex-start;
    padding: 15px;
    text-align: start;
  }
`
export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 30px 15px;
    border-top: 1px solid #1111;
    justify-content: flex-start;
    align-items: flex-end;
  }
`

export const Price = styled.p`
  font-size: 14px;
  color: #d65a29;
  margin-right: 7px;
  span {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    background-color: #d65a29;
    color: #ffff;
    padding: 4px;
    border-radius: 3px;
  }
`

export const Discount = styled.span`
  font-size: 13px;
  text-decoration: line-through;
  color: #888;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`
export const CartButton = styled.button<buttonProp>`
  width: 100%;
  border: none;
  background-color: ${props => (props.inCart ? 'transparent' : '#bb2a7d')};
  padding: 3px 10px;
  color: ${props => (props.inCart ? '#00A881' : '#ffff')};
  border-radius: 4px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 60%;
    font-size: 12px;
    padding: 5px 15px;
    font-weight: 100;
    text-transform: uppercase;
    align-self: flex-end;
  }
`
