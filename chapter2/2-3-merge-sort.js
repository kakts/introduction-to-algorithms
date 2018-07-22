
function merge(list, p, q, r) {
  console.log(list, p, q, r)
  // 分割する配列の左右それぞれの要素数取得
  const n1 = q - p;
  const n2 = r - q;

  const L = [];
  const R = [];
  // L[1...n1 + 1] と R[1..n2+1]を２つの新しい配列とする
  for (let i = 0; i < n1; i++) {
    L[i] = list[p + i];
  }

  for (let j = 0; j <= n2; j++) {
    R[j] = list[q + j];
  }
  // sentinelとして、終了判定に使う値をいれる。 ここではInfinityをいれる
  L[n1] = Infinity;
  R[n2 + 1] = Infinity;
  let i = j = 0;
  for (let k = p; k < r; k++) {
    if (L[i] <= R[j]) {
      list[k] = L[i];
      i += 1;
    } else if (R[j] < L[i]) {
      list[k] = R[j];
      j += 1;
    }
    // console.log(list);
  }
  console.log('before:', list);
  return list
}

function mergeSort(A, p, r) {
  console.log(p, r)
  if (p < r) {
    let q =  Math.floor((p + r) / 2);
    console.log('q is ', q);
    mergeSort(A, p, q); // 左半分
    console.log('-----', A)
    mergeSort(A, q + 1, r); // 右半分
    // これにより 左、右それぞれはソートされている
    
    return merge(A, p, q, r);
  } else {
    // do nothing
  }
}
console.log(mergeSort([2, 7, 5, 4, 4, 1, 2, 6], 0, 7));