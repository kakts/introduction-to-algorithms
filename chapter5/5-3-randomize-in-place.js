// 与えられて配列をO(n)でランダムにソートする

function randomizeInPlace(list) {
  let len = list.length;
  for (let i = 0; i < len; i++) {
    // A[i]とA[Random(i, n)]を置き換える
    let tmp = list[i];
    let randomNum = Math.random(i, len);
    list[i] = list[randomNum];
    list[randomNum] = tmp;
  }
}