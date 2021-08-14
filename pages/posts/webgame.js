import Head from 'next/head'
import Layout from '/components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>プログラミング道場紹介</title>
      </Head>
      <h1>プログラミング道場</h1>
      <p>
        タイピングゲームとITクイズが楽しめる。<br></br>
        Ruby on Rails・JavaScript・herokuで作成。<br></br>
        プログラミングに興味を持ってもらうために作った。<br></br>
        ドットインストールを参考<br></br>
      </p>
      <p>ドットインストール参考元</p>
      <p>
        <a href="https://dotinstall.com/lessons/typing_js_v4">
          JavaScriptでタイピングゲームを作ろう
        </a>
      </p>
      <p>
        <a href="https://dotinstall.com/lessons/quiz_js_v3">
          JavaScriptで三択クイズを作ろう
        </a>
      </p>
      <p><a href="https://webgame001.herokuapp.com/" target="_blank" rel="noopener noreferrer">プログラミング道場へ</a></p>
      <p><a href="https://github.com/kasugatakuya/webgame" target="_blank" rel="noopener noreferrer">GitHubへ</a></p>
    </Layout>
  )
}