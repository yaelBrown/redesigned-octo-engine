import { useReducer, useEffect } from "react"
import reducer from "../store/reducer"
import ACTIONS from "../store/actions"
import axios from "axios"
import PostService from "../services/PostService"

const ps = new PostService()

export default function Home() {
  const [state, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/data").then((res) => {
      const data = ps.posts_to_store(res.data.data)
      dispatch({type: ACTIONS.POSTS_TO_STORE, payload: data})
    })
    console.log("useEffect")
  }, [])


  return (
    <>
      <p>home</p>
      <p>{state.posts.length}</p>
    </>
    
  )
}
