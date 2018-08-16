// 乱択版クイックソート
/**
 * 最初の段階で、配列の中からランダムに要素を選び、A[r]と交換する
 * これによってピボットが毎回ランダムに選択される
 */

 function randomizedPartition(A, p, r) {
   let i = Math.random(p, r);
   // A[i]とA[r]を交換する
   let tmp = A[i];
   A[i] = A[r];
   A[r] = tmp;

   return partition(A, p, r);
 }

 // 部分配列A[p..r]をその場で再配列する手続き
// x = A[r]を常にピボットとして選択し、
// 部分配列A[p..r]をピボットより大きい要素の集合と小さい要素の集合に分割する
function partition(A, p, r) {
  let x = A[r];
  let i = p - 1;

  // この各イテレートの直前では、任意の配列お世辞kに対して以下の命題が成立する
  /**
   * 1: p <= k < i ならば A[k] <= x
   * 2: i + 1 <= k <= j - 1 ならば A[k] > x
   * 3: k = rならば A[k] = x
   */
  for (let j = p; j < r; j++) {
    if (A[j] <= x) {
      i += 1;
      // A[i]とA[j]を交換する
      // これにより iをふくめた左側がすべて ｘより小さくなる
      let tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
    }
    // console.log(A, j, p, r, i)
  }
  // このループを出た時点で A[i]を含めた左がわの部分配列はすべて ｘyより小さくなる
  // なので、 A[i + 1] と A[r] を交換することで、
  // A[i + 1]を基準点として 左は 基準点より小さい 右は基準点より大きい値のみが存在する

  let tmp = A[i + 1];
  A[i + 1] = A[r];
  A[r] = tmp;

  return i + 1;
}

 function randomizedQuickSort(A, p, r) {
  let q;
  if (p < r) {
    q = randomizedPartition(A, p, r);
    console.log('------', q)
    randomizedQuickSort(A, p, q - 1);
    randomizedQuickSort(A, q + 1, r);
  }
}
