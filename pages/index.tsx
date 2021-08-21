import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import { CardList } from '../components/card/index.js'

export const getStaticProps: GetStaticProps = async() => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// 型のエイリアス(TypeScript)で使用できる。
type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
  }[]
}

export default function Home({ allPostsData }: Props) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <h2>プロフィール</h2>
          <p>
            本名は春日拓也。長野県出身。好きな食べ物はカレー。元薬剤師。フロントエンドエンジニアとして働いています。新しい技術に興味があり、Reactを使った個人開発も積極的におこなっています。
          </p>
        </section>
        <CardList />
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>ブログ</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  )
}


