import { Html, Main, Head, NextScript } from 'next/document'
import HeadData from '@/components/layout/headData'
import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'
import Footer from '@/components/layout/footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <HeadData/>
      </Head>
      <Header/>
      <body className="flex flex-col m-auto container">
        <main>
          <Sidebar/>
          <section>
            <Main/>
            <NextScript/>
          </section>          
        </main>       
      </body>
      <Footer/>
    </Html>
  )
}
