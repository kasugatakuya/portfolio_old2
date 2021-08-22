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
        <title>ECサイト(デモ)紹介</title>
      </Head>
      <h1>ECサイト(デモ)</h1>
      <Image 
        src='/images/card/ec.png'
        width={320}
        height={200}
      />
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
      <div className={classes.flex_box}>
        <div>
          <a href="https://ec-app-73e21.web.app/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              endIcon={<OpenInNewIcon />}
            >
              ECサイト(デモ)へ
            </Button>
          </a>
        </div>
        <div>
          <a href="https://github.com/kasugatakuya/ec-app" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              endIcon={<OpenInNewIcon />}
            >
              GITHUBへ
            </Button>
          </a>
        </div>
      </div>
    </Layout>
  )
}