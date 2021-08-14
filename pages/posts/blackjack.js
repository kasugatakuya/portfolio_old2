import Head from 'next/head'
import Layout from '/components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>BlackJack紹介</title>
      </Head>
      <h1>BlackJack</h1>
      <p>
        本場のカジノのブラックジャックゲームが楽しめる。<br></br>
        HTML・CSS・JavaScript・Firebaseで作成。<br></br>
        ブラックジャックのルールは本場のカジノと同じ。<br></br>
        ヒット・ダブルダウン・スタンド・スプリット・インシュランスができる。<br></br>
        持ち金は1000$スタートでゲーム内のお金を賭けてプレイできる。<br></br>
        ベーシックストラテジー(最善手)を見ながらプレーできる。<br></br>
        カウンティング表を見ながらプレーできる。<br></br>
      </p>
      <p><a href="https://myblackjack.web.app/" target="_blank" rel="noopener noreferrer">BlackJackサイトへ</a></p>
      <p><a href="https://github.com/kasugatakuya/MyBlackJack" target="_blank" rel="noopener noreferrer">GitHubへ</a></p>
    </Layout>
  )
}