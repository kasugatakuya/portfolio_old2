import Head from 'next/head'
import Layout from '/components/layout'
import Image from 'next/image'
import Button from '@material-ui/core/Button';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    marginTop: '10px'
  },
  flex_box: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}));

export default function FirstPost() {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>STORK模写紹介</title>
      </Head>
      <h1>STORK模写</h1>
      <Image 
        src='/images/card/stork.png'
        width={320}
        height={200}
      />
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
      <div className={classes.flex_box}>
        <div>
          <a href="https://stork-copy.firebaseapp.com/#" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              endIcon={<OpenInNewIcon />}
            >
              STORK模写へ
            </Button>
          </a>
        </div>
        <div>
          <a href="https://github.com/kasugatakuya/stork-copy" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              endIcon={<OpenInNewIcon />}
            >
              GitHubへ
            </Button>
          </a>
        </div>
        <div>
          <a href="https://demo-opencage.com/stork/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              endIcon={<OpenInNewIcon />}
            >
              参考元サイトへ
            </Button>
          </a>
        </div>
      </div>
    </Layout>
  )
}