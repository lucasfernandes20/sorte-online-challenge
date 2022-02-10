import React from 'react'
import { SideBarContainer, Nav, LinkPages, CloseIcon, ExitIcon } from './styles'
import { useRouter } from 'next/router'

interface SideBarProps {
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>
  openSideBar: boolean
}

const SideBar: React.FC<SideBarProps> = ({ setOpenSideBar, openSideBar }) => {
  const router = useRouter()
  return (
    <SideBarContainer open={openSideBar}>
      <CloseIcon onClick={() => setOpenSideBar(false)} />
      <Nav>
        <LinkPages
          onClick={() => router.push('/')}
          acess={router.pathname === '/'}
        >
          Loja
        </LinkPages>
        <LinkPages
          onClick={() => router.push('/shoppingcart')}
          acess={router.pathname === '/shoppingcart'}
        >
          Carrinho
        </LinkPages>
      </Nav>
      <ExitIcon />
    </SideBarContainer>
  )
}

export default SideBar
