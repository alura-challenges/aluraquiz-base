import Head from 'next/head'
import db from '../../../db.json'

export default function Home() {
  return (
      <Head>
        <title>{db.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={db.title} />
        <meta property="og:site_name" content={db.title} />
        <meta property="og:description" content={db.description} />
        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
  )
} 
