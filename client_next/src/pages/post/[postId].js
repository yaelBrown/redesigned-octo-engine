// export async function getStatProps({ params }) {
//   // const post_id = await 

// }
import { useRouter } from 'next/router'
import CONSTANTS from '@/utils/constants'

export async function getServerSideProps(context) {
  const { params } = context
  const { postId } = params
 
  console.log(postId)
  let out = ""
  try {
    let res = await fetch(`${CONSTANTS.API_URL}/api/post/${postId}`)
    out = await res.json()
  } catch(err) {
    console.log(err)
    out = err.message
  }
  
  return {
    props: {
      post: out,
      postId
    }
  }
}


export default function PostPage({ post, postId }) {
  try {
    return (
      <>
        <div>posts details</div>
        <p>post_id: { postId }</p>
        <p>content: {post[0].content}</p>
      </>
    )
  } catch(err) {
    return (
      <>
        <div>posts details</div>
        <p>post_id: { postId }</p>
        <p>content: Error finding post</p>
      </>
    )
  }
}
