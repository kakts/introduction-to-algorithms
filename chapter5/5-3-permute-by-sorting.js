// 配列のランダム置換

function permuteBySorting(list) {
  let len = list.length;
  // P[1..n]を新しい配列とする
  let p = [];
  for (i = 0; i < len; i++) {
    // 任意の乱数生成器で乱数を作成して配列に詰める
    p[i] = random(1, n^3);
  }

  // PをキーとしてAをソートする ここが一番計算時間がかかる
  // マージソートはθ(n*lgn)
}