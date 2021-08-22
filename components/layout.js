import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {useState, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderMenus from './header_menus.js';
import ClosableDrawer from './closable_drawer.js';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#fff",
    color: "444",
  },
  toolBar: {
    margin: '0 auto',
    maxWidth: 1024,
    width: '100%'
  },
  iconButton: {
    margin: '0 0 0 auto'
  },
  title: {
    color: "#212121",
    fontWeight: "bold"
  }
});

const name = 'Kasuga Portfolio'
export const siteTitle = '春日拓也のポートフォリオ'

export default function Layout({ children, home }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = useCallback((e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    setOpen(!open)

  }, [setOpen, open]);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="フロントエンドエンジニアの春日拓也のポートフォリオサイトです。Next.js(React)で作成。成果物・技術ブログを紹介しています。"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.menuBar}>
            <Toolbar className={classes.toolBar}>
              <div>
                <Link href="/">
                  <a className={classes.title}>Kasuga Portfolio</a>
                </Link>
              </div>
              <div className={classes.iconButton}>
                <HeaderMenus handleDrawerToggle={handleDrawerToggle}/>
              </div>
            </Toolbar>
          </AppBar>
          <ClosableDrawer open={open} onClose={handleDrawerToggle} />
        </div>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={190}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>TOPに戻る</a>
          </Link>
        </div>
      )}
    </div>
  )
}