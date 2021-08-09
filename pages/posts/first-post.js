import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>BlackJack紹介</title>
      </Head>
      <h1>BlackJack</h1>
      <h2>
        <Link href="/">
          <a>TOPに戻る</a>
        </Link>
      </h2>
    </Layout>
  )
}