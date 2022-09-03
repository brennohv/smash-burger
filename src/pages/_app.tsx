import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Smash Burger</title>
        <link rel="shortcut icon" href="/img/logo-512.png" />
        <link rel="apple-touch-icon" href="/img/logo-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#030517" />
        <meta
          name="description"
          content="Hamburgueria localizada em Lisboa. Utiliza produtos frescos de alta qualidade para uma experiência única."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
