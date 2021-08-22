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
        <title>BLACK JACK紹介</title>
      </Head>
      <h1>BLACK JACK</h1>
      <Image 
        src='/images/card/blackjack.png'
        width={320}
        height={200}
      />
      <p>
        本場のカジノのブラックジャックゲームが楽しめる。<br></br>
        HTML・CSS・JavaScript・Firebaseで作成。<br></br>
        ブラックジャックのルールは本場のカジノと同じ。<br></br>
        ヒット・ダブルダウン・スタンド・スプリット・インシュランスができる。<br></br>
        持ち金は1000$スタートでゲーム内のお金を賭けてプレイできる。<br></br>
        ベーシックストラテジー(最善手)を見ながらプレーできる。<br></br>
        カウンティング表を見ながらプレーできる。<br></br>
      </p>
      <div className={classes.flex_box}>
        <div>
          <a href="https://myblackjack.web.app/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              endIcon={<OpenInNewIcon />}
            >
              BLACK JACKサイトへ
            </Button>
          </a>
        </div>
        <div>
          <a href="https://github.com/kasugatakuya/MyBlackJack" target="_blank" rel="noopener noreferrer">
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
      </div>
    </Layout>
  )
}