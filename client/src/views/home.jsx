import { useReducer, useEffect } from "react"
import reducer from "../store/reducer"
import ACTIONS from "../store/actions"
import axios from "axios"
import PostService from "../services/PostService"
import API_URLS from "../api/api"

const ps = new PostService()

export default function Home() {
  const [state, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    axios.get(API_URLS.HOME).then((res) => {
      const data = ps.posts_to_store(res.data.data)
      dispatch({type: ACTIONS.POSTS_TO_STORE, payload: data})
    })
    console.log("useEffect")
  }, [])

  return (
    <>
      <p>home</p>
      <p>{ state.posts }</p>
    </>
  )
}
