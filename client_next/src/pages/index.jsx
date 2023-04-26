
import Homecards from "@/components/index/homecards"
import CONSTANTS from "@/utils/constants"
import Link from "next/link"

export async function getServerSideProps(context) {
  // let res = await fetch(`${CONSTANTS.API_URL}/api/data`)
  // const json = await res.json()
  const json = []

  return {
    props: {
      results: json
    }
  }
}

export default function Home({results: query}) {
  return (
    <>
      <div className="container">
        <Homecards/>
      </div>
    </>
  )
}

