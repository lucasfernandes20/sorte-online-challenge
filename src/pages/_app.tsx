import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd'
import ptBr from 'antd/lib/locale/pt_BR'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { Provider } from 'react-redux'
import { store, persistor } from '../redux'
import { PersistGate } from 'redux-persist/integration/react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider locale={ptBr}>
            <Component {...pageProps} />
            <GlobalStyle />
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
