import Head from 'next/head'
import Layout from '/components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>STORK模写紹介</title>
      </Head>
      <h1>STORK模写</h1>
      <p>
        WordPressのテーマであるSTORKの模写コーディング<br></br>
        HTML・CSS・JavaScript・jQuery・Firebaseで作成。<br></br>
        メディアクエリを使った、レスポンシブ対応。<br></br>
      </p>
      <p>主な機能</p>
      <ul>
        <li>ハンバーガーメニュー</li>
        <li>複数表示スライドショー</li>
        <li>ドロップダウンメニュー</li>
        <li>ページ内遷移機能</li>
        <li>検索モーダル</li>
      </ul>
      <p><a href="https://stork-copy.firebaseapp.com/#" target="_blank" rel="noopener noreferrer">STORK模写へ</a></p>
      <p><a href="https://demo-opencage.com/stork/" target="_blank" rel="noopener noreferrer">参考元サイトへ</a></p>
      <p><a href="https://github.com/kasugatakuya/stork-copy" target="_blank" rel="noopener noreferrer">GitHubへ</a></p>
    </Layout>
  )
}