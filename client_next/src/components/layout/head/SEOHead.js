import globalMeta from './globalMeta';
 
export default function SeoHead({
	title = globalMeta.siteName,
	description = globalMeta.description,
	canonicalUrl = globalMeta.siteUrl,
	ogType,
	ogImgUrl = globalMeta.siteLogo,
}) {
 
  return (
    <>
      <title>{ title } </title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={globalMeta.siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImgUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </>
  )
}