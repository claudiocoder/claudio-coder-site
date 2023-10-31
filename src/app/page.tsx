import Head from 'next/head'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Claudio's Page`,
  description: 'Claudio Coder Profile',
  icons: {
    icon: 'images/favicon.ico',
  },
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Claudio&#180;s Page</title>
        <meta name="description" content="Claudio Coder Personal Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Loading ...</h1>
    </>
  )
}
