import Head from 'next/head'
import styles from './home.module.css'
import Layout, { siteTitle } from '../components/layout'
import Slider from '../components/Slider/Slider'

export default function Home() {

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Layout>

        <div className={styles.slider}>
          <Slider />
        </div>

      </Layout>
    </>
  )
}

