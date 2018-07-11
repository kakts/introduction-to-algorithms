
function merge(list, p, q, r) {
  // 分割する配列の左右それぞれの要素数取得
  const n1 = q - p;
  const n2 = r - q;

  const L = [];
  const R = [];
  // L[1...n1 + 1] と R[1..n2+1]を２つの新しい配列とする
  for (let i = 0; i < n1; i++) {
    console.log(p + i)
    L[i] = list[p + i];
  }
  console.log(L);

  for (let j = 0; j <= n2; j++) {
    R[j] = list[q + j];
  }
  console.log(R);
  // sentinelとして、終了判定に使う値をいれる。 ここではInfinityをいれる
  L[n1] = Infinity;
  R[n2 + 1] = Infinity;
  console.log(L, R)
  console.log(L, R)
  let i = j = 0;
  for (let k = p; k < r; k++) {
    if (L[i] <= R[j]) {
      list[k] = L[i];
      i += 1;
    } else if (R[j] < L[i]) {
      list[k] = R[j];
      j += 1;
    }
    console.log(list);
  }
  return list
}


// function mergeSort(A, p, r) {
//   if (p < r) {
//     q = 
//   }
// }
console.log(merge([2, 4, 5, 7, 1, 2, 3, 6], 0, 4, 7));