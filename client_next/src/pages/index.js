export async function getServerSideProps(context) {
  const res = await (await fetch('https://jsonplaceholder.typicode.com/posts/'))
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
    </>
  )
}

