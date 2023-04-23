import CONSTANTS from "@/utils/constants"
import Script from "next/script"

export default function AdsenseHead() {
  return (
    <>
      <Script 
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${CONSTANTS.GA_TRACKING_ID}`}
      />

      <Script 
        async
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
        __html: 
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${CONSTANTS.GA_TRACKING_ID});`
      }}/>

      {/* <Script
        id="Adsense-id"
        data-ad-client="ca-pub-987************676"
        async
        strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      /> */}
    </>
  )
}
