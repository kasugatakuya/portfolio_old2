import Head from 'next/head'
import Layout from '/components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>ECサイト(デモ)紹介</title>
      </Head>
      <h1>ECサイト(デモ)</h1>
      <p>
        服を購入できるECサイトのデモアプリ<br></br>
        React・Redux・Material-UI・Firebase・Firestoreで作成。<br></br>
        服をカートに入れて購入する流れを体感できる<br></br>
        出品・商品編集ができる<br></br>
      </p>
      <p>
        テストアカウント<br></br>
        メールアドレス：test@yahoo.co.jp<br></br>
        パスワード：test0403<br></br>
      </p>
      <p><a href="https://ec-app-73e21.web.app/" target="_blank" rel="noopener noreferrer">ECサイト(デモ)へ</a></p>
      <p><a href="https://github.com/kasugatakuya/ec-app" target="_blank" rel="noopener noreferrer">GitHubへ</a></p>
    </Layout>
  )
}