import React from 'react'
import { ComputerListContainer, List } from './styles'
import { RequestType } from '../../redux/reducers/types'
import ComputerCard from '../computerCard'

const ComputerList: React.FC<RequestType> = ({ data }) => {
  return (
    <ComputerListContainer>
      <List>
        {data &&
          data.map(product => (
            <ComputerCard product={product} key={product.id} />
          ))}
      </List>
    </ComputerListContainer>
  )
}

export default ComputerList
