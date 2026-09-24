// 東京都の天気予報データを取得するためのURL
const url = 'https://jsonplaceholder.typicode.com/posts';
// イベント処理の対象となるボタン
const button = document.getElementById('ajax-btn');

// ボタンのクリック時にイベント処理を実行する
button.addEventListener('click', () => {
     const dummyData = { name: '侍太郎', age: 30 };
    // 気象庁のWebサイトにリクエストを送信し、天気予報データを取得する
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dummyData) // JSON形式に変換
    })
      // サーバーからAjaxレスポンスを受け取ったときの処理
      .then((response) => {
        // JSONとして解析し、JavaScriptのオブジェクトに変換
        return response.json();
      })
      .then((data) => {
        // オブジェクトから「東京の明日の天気」を抽出して表示
        console.log('サーバーからの応答：\n' + JSON.stringify(data, null, 2) );
      });
});