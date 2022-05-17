import styled from '@emotion/styled'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

// const Html = styled(OriginalHtml)`
//   height: 100%;
// `
// const Head = styled(OriginalHead)`
//   height: 100%;
// `
// const Body = styled.body`
//   height: 100%;
// `

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
