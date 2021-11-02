import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }) {

  return (
    <div className={styles.container}>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="client name"
          content="Website for client name"
        />
      </Head>

      <main className={styles.content}>{children}</main>

    </div>
  )
}
