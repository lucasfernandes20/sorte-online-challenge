import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import ComputerList from '../components/computerList'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { RequestType } from '../redux/reducers/types'

import { Container } from '../styles/pages/Home'

const Home: React.FC<RequestType> = ({ data }) => {
  return (
    <Container>
      <Head>
        <title>Dev Store</title>
      </Head>
      <Header />
      <ComputerList data={data} />
    </Container>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('http://localhost:8080/products')
  return { props: { data: res.data }, revalidate: 10 }
}

export default Home
