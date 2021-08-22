import Card  from './card.js'
import styles from './card_list.module.css'

const CardList = () => {
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

  return (
    <section>
      <h2>制作物</h2>
      <div className={styles.grid}>
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
  )
}

export default CardList;