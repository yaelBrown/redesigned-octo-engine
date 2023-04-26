import bwLogoWhite from "@/public/assets/images/logo/BigWallets-blog-logo-white.png"
import adPlaceholder780x90 from "@/public/assets/images/ads/placeholder728x90.png"
import Image from "next/image"
import Navbar from "./header/Navbar"
import Link from "next/link"
import ShadowBorder from "./header/ShadowBorder"

export default function Header() {
  const headerClassStack = "flex flex-row items-center content-around justify-center"
  return(
    <header className="container items-center">
      <div className={headerClassStack}>
        <Link href="/">
          <Image src={bwLogoWhite} />
        </Link>
        <Image src={adPlaceholder780x90} />
      </div>
      <div className={headerClassStack}>
        <Navbar/>
      </div>
      <div className={headerClassStack}>
        <ShadowBorder/>
      </div>
    </header>
  )
}
