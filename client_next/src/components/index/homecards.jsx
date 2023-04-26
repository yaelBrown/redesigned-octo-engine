import React from 'react'
import Image from 'next/image'
import Herocards from './herocards'
import Herocardssmall from './herocardssmall'
import ph728x90 from '@/public/assets/images/ads/placeholder728x90.jpg'
import Horizontalcards from './horizontalcards'

export default function Homecards() {
  const flexRow = 'flex flex-row'
  return (
    <>
      <div className={flexRow}>
        <Herocards/>
      </div>

      <div className={flexRow}>
        <Herocardssmall/>
        <Herocardssmall/>
      </div>
      <div className={flexRow}>
        <Herocardssmall/>
        <Herocardssmall/>
      </div>
      <div className={flexRow + " m-x homecardsAds"} >
        <Image src={ph728x90} alt="ads placeholder" />
      </div>
      <div className="flex flex-col">
        <Horizontalcards/>
        <Horizontalcards/>
        <Horizontalcards/>
        <Horizontalcards/>
        <Horizontalcards/>
      </div>
      <div className={flexRow + " m-x homecardsAds mb-4"} >
        <Image src={ph728x90} alt="ads placeholder" />
      </div>
    </>
  )
}
