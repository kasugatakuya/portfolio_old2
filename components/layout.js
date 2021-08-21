import Head from 'next/head'
import Image from 'next/image'
import styles from './Layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from './header/header.js'

const name = 'Kasuga Portfolio'
export const siteTitle = '春日拓也のポートフォリオ'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="フロントエンドエンジニアの春日拓也のポートフォリオサイトです。Next.js(React)で作成。成果物・技術ブログを紹介しています。"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={190}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← TOPに戻る</a>
          </Link>
        </div>
      )}
    </div>
  )
}