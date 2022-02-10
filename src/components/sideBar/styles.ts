import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { IoExitOutline } from 'react-icons/io5'

interface SideBarStyleProp {
  open: boolean
}

interface LinkStyleProp {
  acess: boolean
}

export const SideBarContainer = styled.aside<SideBarStyleProp>`
  position: fixed;
  width: 70vw;
  height: 100vh;
  top: 0;
  right: ${props => (props.open ? '0' : '-70vw')};
  box-shadow: ${props =>
    props.open ? '0px 1px 15px rgba(99, 99, 99, 0.7);' : null};
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: ease-in-out 400ms;
  z-index: 1000;
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`
export const LinkPages = styled.p<LinkStyleProp>`
  color: ${props => (props.acess ? '#00a881' : null)};
  font-size: 19px;
  border-left: ${props => (props.acess ? '4px solid #00a881' : null)};
  padding-left: 5px;
`
export const CloseIcon = styled(IoMdClose)`
  width: 30px;
  height: 30px;
  margin: 10px;
  color: #505050;
`
export const ExitIcon = styled(IoExitOutline)`
  width: 30px;
  height: 30px;
  margin: 10px;
  color: #505050;
`
