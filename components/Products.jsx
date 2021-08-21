import React from 'react'

const Products = () => {
  return (
    [
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
    ]
  )
}

export default Products;