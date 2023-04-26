import Image from 'next/image'
import React from 'react'

import PH1 from '@/public/assets/images/home/hero-placeholder-1.png'
import PH2 from '@/public/assets/images/home/hero-placeholder-2.png'
import PH3 from '@/public/assets/images/home/hero-placeholder-3.png'

export default function Herocards() {
  
  return (
    <div className='hc flex flex-col mb-8'>
      <Image src={PH1} width={605}/>
      <small>[Author Name] [date/time]</small>
      <h4>Title Text</h4>
      <p>Some article text some article text some article text</p>
      <small>[tags]</small>
    </div>
  )
}
