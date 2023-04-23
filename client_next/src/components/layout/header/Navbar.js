import Link from "next/link"

export default function Navbar() {
  
  const navLinks = [
    {
      "name": "Home",
      "path": "/"
    },
    {
      "name": "Finance",
      "path": "/finance"
    },
    {
      "name": "Crypto",
      "path": "/crypto"
    },
    {
      "name": "Search",
      "path": "/search"
    },
  ]

  const navLinksList = navLinks.map((e) => {
    return (<li><Link href={e.path}><h6>{e.name}</h6></Link></li>)
  })

  return (
    <nav className="flex flex-row justify-between w-screen">
      <div>x</div>
      <ul>
        { navLinksList }
      </ul>
      <div>
        <p>s</p>
      </div>
    </nav>
  )
}
