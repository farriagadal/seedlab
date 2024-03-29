import React from 'react'
import NextDocument, { Html } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class Document extends NextDocument {
  static async getInitialProps (ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <Html lang='es' style={{scrollBehavior:'smooth'}}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Html>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}