---
title: 'Reactとは'
date: '2021-08-20'
---

React(リアクト)は、Facebookとコミュニティによって開発されているユーザインタフェース構築のためのJavaScriptライブラリである。React.jsまたはReactJSの名称でも知られている。ReactはSPA(シングルページアプリケーション)やMA(モバイルアプリケーション)の開発におけるベースとして使用することができる。

## 【歴史】
ReactはFacebookのソフトウェアエンジニアであるJordan Walkeによって開発された。PHP向けのHTMLコンポーネントフレームワークであるXHP（英語版）の影響を受けている。2011年にFacebookのニュースフィード上で最初に使用され、2012年にはInstagramでも使用されるようになった。2013年5月のJSConf USでオープンソース化された。
React NativeはAndroid・iOS・UWPでのReactを利用したネイティブ開発を可能にするもので、2015年2月のReact.js Confで発表され、3月にオープンソース化された。
2017年4月17日、Facebookはユーザインタフェースを構築するためのReactフレームワークライブラリの新しいコアアルゴリズムであるReact Fiber（英語版）を発表した。React FiberはReactフレームワークの将来の改良と機能開発の基盤となるものである

## 【仮想DOM】
Reactでは仮想DOMとしてメモリ上にDOMの状態をキャッシュしておき、仮想DOMに差分が発生した場合にのみ差分を計算し、実際のDOMに差分のみを反映させることにより効率的な描画を実現している。これにより、プログラマは変更があるたびにページ全体を描画するコードを記述しながら、Reactライブラリによって実際に変更されたサブコンポーネントのみを描画することができる。

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.