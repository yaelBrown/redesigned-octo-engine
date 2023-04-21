import Head from "../components/layout/head"
import Header from "../components/layout/header"
import Sidebar from "../components/layout/sidebar"
import Footer from "../components/layout/footer"

export default function Layout(props) {
  return (
    <>
      <Head/>
      <Header/>
      <Sidebar/>
        <main>
          { props.child }
        </main>
      <Footer/>
    </>
  )
}
