import Image from "next/image"
import PH3 from '@/public/assets/images/home/hero-placeholder-3.png'

export default function Horizontalcards() {
  return (
    <div className='hzc flex my-4'>
      <Image className='mr-4' src={PH3} height={140} width={248} />
      <div className="hzc-content flex flex-col">
        <small>[Author Name] [date/time]</small>
        <h4>Title Text</h4>
        <p>Some article text some article text some article text</p>
        <small>[tags]</small>
      </div>
    </div>
  )
}
