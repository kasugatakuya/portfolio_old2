import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Card  from '../components/card.js'
import cardListStyles from '../styles/card_list.module.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from "react";

const useStyles = makeStyles({
  big_space: {
    marginTop: "60px"
  },
  space: {
    marginTop: "15px"
  },
  form: {
    maxWidth: "900px"
  }
});

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
  const classes = useStyles();

  // 制作物設定
  const contents = [
    {
      id: 1,
      file: 'blackjack',
      title: 'BLACK JACK',
      description: 'トランプのブラックジャックゲーム。JavaScriptで作成',
      images: 'blackjack.png'
    },
    {
      id: 2,
      file: 'ec',
      title: 'ECサイト(デモ)',
      description: '様々な服が買えるECサイトのデモ。React+Reduxで作成',
      images: 'ec.png'
    },
    {
      id: 3,
      file: 'stork',
      title: 'STORK模写',
      description: 'WordPressのテーマであるSTORKの模写。HTML・CSS・jQueryで作成',
      images: 'stork.png'
    },
    {
      id: 4,
      file: 'webgame',
      title: 'プログラミング道場',
      description: 'プログラミングに興味を持つために作ったサイト。タイピングゲームとITクイズが楽しめる。Ruby on Rails・JavaScriptで作成',
      images: 'webgame.png'
    }
  ];

  // 問い合わせメール設定
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const send = async () => {
    if (name === "") {
      alert("お名前を入力してください");
      return;
    } else if (mail === "") {
      alert("メールアドレスを入力してください");
      return;
    } else if (message === "") {
      alert("メッセージを入力してください");
      return;
    }
    await fetch('/api/mail', {
      method: 'POST',
      body: `
      【名前】
      ${name}

      【メールアドレス】
      ${mail}

      【お問い合わせ内容】
      ${message}
      `,
    });
    setName("");
    setMail("");
    setMessage("");
    alert('送信が完了しました。後日メールにてご連絡させていただきます。')
  };

  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <h2>プロフィール</h2>
          <p>
            本名:春日拓也。長野県出身。好きな食べ物はカレー。元薬剤師。フロントエンドエンジニアとして働いています。新しい技術に興味があり、Reactを使った個人開発も積極的におこなっています。
          </p>
        </section>
        <section>
          <h2>制作物</h2>
          <div className={cardListStyles.grid}>
            {contents.length > 0 && (
              contents.map(content => (
                <Card
                  key={content.id}
                  id={content.id}
                  file={content.file}
                  title={content.title}
                  description={content.description}
                  images={content.images}
                />
              ))
            )}
          </div>
        </section>
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
        <section className={classes.big_space}>
          <h2>お問い合わせ</h2>
          <div>
            <div>
              <TextField 
                id="name"
                label="お名前"
                value={name}
                fullWidth
                variant="outlined"
                type="text"
                onChange={(e) => setName(e.target.value)}
                className={classes.form}
              />
            </div>
            <div className={classes.space}>
              <TextField 
                id="mail"
                label="メールアドレス"
                value={mail}
                fullWidth
                variant="outlined"
                type="text"
                onChange={(e) => setMail(e.target.value)}
                className={classes.form}
              />
            </div>
            <div className={classes.space}>
              <TextField
                id="text"
                label="メッセージ"
                value={message}
                fullWidth
                multiline
                rows="10"
                variant="outlined"
                onChange={(e) => setMessage(e.target.value)}
                className={classes.form}
              />
            </div>
            <div className={classes.space}>
              <Button variant="contained" type="button" onClick={send}>送信</Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}


