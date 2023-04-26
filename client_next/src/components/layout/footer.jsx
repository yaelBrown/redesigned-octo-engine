import Image from "next/image"
import Link from "next/link"
import BGLogoBlack from "@/public/assets/images/logo/BigWallets-blog-logo-black.png"

export default function Footer() {
  return (
    <footer className="container">
      <section className="topfooter">
        <ul className="flex flex-row justify-center">
          <li className="mr-4">
            <Link href="/about">
              <small>About</small>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/privacy">
              <small>Privacy Policy</small>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/terms">
              <small>Terms and Conditions</small>
            </Link>
          </li>
        </ul>
      </section>
      <div className="copyright flex flex-row justify-center">
        <Image src={BGLogoBlack} />
      </div>
    </footer>
  )
}
