import CONSTANTS from "@/utils/constants"
import Link from "next/link"

export async function getServerSideProps(context) {
  let res = await fetch(`${CONSTANTS.API_URL}/api/data`)
  const json = await res.json()
  
  return {
    props: {
      results: json
    }
  }
}

export default function Home({results: query}) {
  return (
    <>
      <h1>Landing Page</h1>
      <p>{ query.length }</p>

      <ul>
        <li>
          <Link href="/post/12">Post 12</Link>
        </li>
        <li>
          <Link href="/post/24">Post 24</Link>
        </li>
        <li>
          <Link href="/post/lol">Post lol</Link>
        </li>
      </ul>
    </>
  )
}

