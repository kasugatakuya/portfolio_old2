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
        <title>プログラミング道場紹介</title>
      </Head>
      <h1>プログラミング道場</h1>
      <Image 
        src='/images/card/webgame.png'
        width={320}
        height={200}
      />
      <p>
        タイピングゲームとITクイズが楽しめる。<br></br>
        Ruby on Rails・JavaScript・herokuで作成。<br></br>
        プログラミングに興味を持ってもらうために作った。<br></br>
        ドットインストールを参考<br></br>
      </p>
      <div className={classes.flex_box}>
        <div>
          <a href="https://webgame001.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              endIcon={<OpenInNewIcon />}
            >
              プログラミング道場へ
            </Button>
          </a>
        </div>
        <div>
          <a href="https://github.com/kasugatakuya/webgame" target="_blank" rel="noopener noreferrer">
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