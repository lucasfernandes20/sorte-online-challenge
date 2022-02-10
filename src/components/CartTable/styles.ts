import styled from 'styled-components'

export const Preview = styled.img`
  height: 50px;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 100%;
    height: 90px;
    object-fit: cover;
  }
`
export const TableContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  @media (min-width: 768px) {
    overflow-x: hidden;
  }
`

export const DeleteButton = styled.button`
  cursor: pointer;
`
