import { Html, Main, NextScript } from 'next/document'
import Head from '@/components/layout/head'
import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'
import Footer from '@/components/layout/footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <Header/>
      <body>
        <Sidebar/>
        <Main/>
        <NextScript/>
      </body>
      <Footer/>
    </Html>
  )
}
