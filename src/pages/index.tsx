import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Dev Store</title>
      </Head>
      <Header />
    </Container>
  )
}

export default Home
