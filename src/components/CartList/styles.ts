import styled from 'styled-components'

export const CartListContainer = styled.section`
  width: 100vw;
  max-width: 1024px;
  overflow-x: hidden;
  padding: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
`
export const Paper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 15px rgba(99, 99, 99, 0.3);
`

export const CartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const RemoveCartButton = styled.button`
  border: none;
  padding: 4px 30px;
  font-size: 17px;
  color: #ffff;
  background-color: #bb2a7d;
  border-radius: 4px;
  align-self: flex-end;
  margin-bottom: 10px;
  cursor: pointer;
`

export const Title = styled.h1`
  margin: 50px 0 30px 0;
  align-self: center;
  color: gray;
  @media (min-width: 768px) {
    align-self: flex-start;
  }
`

export const TotalPrice = styled.h2`
  letter-spacing: 2px;
  text-transform: uppercase;
  height: 50px;
  padding: 15px 30px;
  margin-top: 10px;
  background-color: white;
  border: 2px solid gray;
  color: gray;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    align-self: flex-end;
  }
`
