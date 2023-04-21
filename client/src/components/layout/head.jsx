import React from 'react'
import CONSTANTS from '../../utils/constants'

export default function Head() {
  return (
    <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${CONSTANTS.GA_TRACKING_ID}`}></script>

      <script dangerouslySetInnerHTML={{
        __html: 
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${CONSTANTS.GA_TRACKING_ID});`
      }}/>
    </Head>
  )
}
