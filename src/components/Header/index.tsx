import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { HeaderContainer } from '../../styles/pages/Home'
import SideBar from '../sideBar'
import {
  Container,
  Logo,
  CartButton,
  CartIcon,
  MenuHamburguerIcon
} from './styles'

const Header: React.FC = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  const router = useRouter()
  return (
    <HeaderContainer>
      <Container>
        <Logo
          src="./images/dev_store_logo.png"
          alt="Logo"
          onClick={() => router.push('/')}
        />
        <CartButton type="button">
          <CartIcon onClick={() => router.push('/shoppingcart')} />
        </CartButton>
        <MenuHamburguerIcon onClick={() => setOpenSideBar(true)} />
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      </Container>
    </HeaderContainer>
  )
}

export default Header
