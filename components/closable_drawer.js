import React from 'react'
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Product from './product.js';

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
      width: 256
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 256
  },
  title: {
    padding: '10px 10px 10px 10px',
    fontWeight: 'bold'
  },
  product: {
    padding: '10px 10px 10px 10px'
  }
}));

const ClosableDrawer = (props) => {
  const classes = useStyles();
  const {container} = props;

  const products = [
    {
      id: 1,
      file: 'blackjack',
      title: 'BlackJack',
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

  return (
    <nav className={classes.drawer}>
      <Drawer 
        cantainer={container} 
        variant="temporary"
        anchor="right"
        open={props.open}
        onClose={(e) => props.onClose(e)}
        classes={{paper: classes.drawerPaper}}
        ModalProps={{keepMounted: true}}
      >
        <div className={classes.title}>
          Menu
        </div>
        <Divider />
        <div>
          <div className={classes.title}>制作物</div>
          {products.length > 0 && (
            products.map(product => (
              <Product
                key={product.id}
                id={product.id}
                file={product.file}
                title={product.title}
              />
            ))
          )}
        </div>
        <Divider />
        <div className={classes.title}>ブログ</div>
      </Drawer>
    </nav>
  )
}

export default ClosableDrawer;