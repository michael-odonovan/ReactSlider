import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Slider from '../components/Slider/Slider'

export default function Home() {

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Layout>

      <Slider />

      </Layout>
    </>
  )
}

