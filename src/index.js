/**
 * Appコンポーネントを定義するファイル
 */

// モジュールを読み込む
import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

// コンポーネントを定義する
export default class App extends Component {
    // レンダリングする
    render () {
        return (
            <div>
                <h1>Hello</h1>
            </div>)
    }
}

// DOMを書き換える
ReactDOM.render(
    <App />,
    // root要素を取得する。
    document.getElementById('root')
)