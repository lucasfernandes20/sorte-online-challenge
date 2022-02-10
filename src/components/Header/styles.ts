import styled from 'styled-components'
import { BsCart3 } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 60px;
  height: 57px;
  cursor: pointer;
`
export const CartIcon = styled(BsCart3)`
  width: 50%;
  height: 50%;
  color: #b53575;
`

export const CartButton = styled.button`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 60px;
    height: 57px;
    border-radius: 50px;
    background-color: whitesmoke;
    border: 1px solid #b53575;
    cursor: pointer;
  }
`

export const MenuHamburguerIcon = styled(GiHamburgerMenu)`
  display: block;
  width: 30px;
  height: 30px;
  color: #505050;
  @media (min-width: 768px) {
    display: none;
  }
`
