// export async function getStatProps({ params }) {
//   // const post_id = await 
// }

import CONSTANTS from '@/utils/constants'
import Image from 'next/image'

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
    const data = JSON.parse(post[0].content)
    console.log(data)
    return (
      <>
        {/* <Image src={data.media_thumbnail[0].url} width={605} height={419}/> */}
        <img src={data.media_thumbnail[0].url} width={605} />
        <h3>{data.title}</h3>
        <p dangerouslySetInnerHTML={{__html: `${data.content[0].value}`}} />
        <br/>
        <ul>
          {
            data.tags.forEach(e => {
              return (<li>{e.term}</li>)
            })
          }
        </ul>
      </>
    )
  } catch(err) {
    return (
      <>
        <p>post_id: { postId }</p>
        <p>content: Error finding post</p>
        <p>{err.message}</p>
      </>
    )
  }
}
