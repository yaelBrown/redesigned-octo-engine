import { createBrowserRouter } from "react-router-dom"
import Home from "../views/home"
import Layout from "../views/layout"

const router = createBrowserRouter([
  { path: "/", element: <Layout child={<Home/>} /> },
])

export default router
