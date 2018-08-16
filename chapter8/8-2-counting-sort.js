/**
 * 計数ソート
 * @param {Array.integer} A 入力配列 
 * @param {Array.integer} B ソート結果を格納する配列 
 * @param {*} k 
 */
function countingSort(A) {
  let C = [];
  let B = []
  let k = A.length;
  // 配列Cの初期化
  for (let i = 0; i < k; i++) {
    C[i] = 0;
  }
  console.log(1, C, k)
  // Aの各要素を調べる
  for (let j = 1; j < A.length; j++) {
    let data = A[j];
    C[data]++;
  }

  // C[i]はiと等しい要素の数を表す
  for (let i = 1; i < k; i++) {
    C[i] = C[i] + C[i - 1];
  }
  console.log(C, 2)
  // 各要素A[i]を出力配列Bの正しくソートされた位置に置く
  /**
   * n個の要素がすべて異なるならば、最初にここに到達したときには
   * 各A[j]に対して、A[j]以下の要素がC[A[j]]個存在する
   * なので、C[A[j]]が出力配列におけるA[j]の正しい最終位置
   * ただ、要素がすべて異なるとは限らない
   * そのため値A[j]をBに格納するたびにC[A[j]]から１を引く
   * これにより、 A[j]と同じ値を持つ入力要素が次に現れたときには、
   * それを出力配列の中のA[j]の直前の位置に格納できる
   */
  console.log(A, C)
  for (let p = A.length - 1; p >= 0; p--) {
    B[C[A[p]]] = A[p];
    C[A[p]]--;

    console.log(p, A[p], C, B)
  }

  return B;
}

console.log(countingSort([2, 5, 3, 0, 2, 3, 0, 3], [], 8))