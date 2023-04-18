import Footer from "../components/layout/footer"
import Header from "../components/layout/header"
import Sidebar from "../components/layout/sidebar"

export default function Layout(props) {
  return (
    <>
      <Header/>
      <Sidebar/>
        <main>
          { props.child }
        </main>
      <Footer/>
    </>
  )
}
