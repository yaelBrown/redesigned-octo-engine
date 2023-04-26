import Image from "next/image";
import Sidebarcards from "../sidebar/sidebarcards";
import PHSB from "@/public/assets/images/ads/placeholder160x600.jpg"
import PBSBsmall from "@/public/assets/images/ads/placeholder300x250.jpg"

export default function Sidebar() {
  return (
    <aside className="px-4 mb-8">
      <div className="sbarticles">
        <h4 className="mb-2">What you missed</h4>
        <Sidebarcards/>
        <Sidebarcards/>
        <Sidebarcards/>
      </div>
      <div className="sbad mt-4">
        <Image src={PHSB} />
      </div>
      <div className="sbarticles2 mt-4">
        <Sidebarcards/>
        <Sidebarcards/>
        <Sidebarcards/>
        <Sidebarcards/>
        <Sidebarcards/>
        <Sidebarcards/>
        <Sidebarcards/>
      </div>
      <div className="sbad2 my-4">
        <Image src={PBSBsmall} />
      </div>
    </aside>
  )
}
