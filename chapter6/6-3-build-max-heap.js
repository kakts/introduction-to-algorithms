
function getLeftIndex(i) {
  return  2 * i;
}

function getRightIndex(i) {
  return (2 * i) + 1;
}

function maxHeapify(A, i) {
  let l = getLeftIndex(i);
  let r = getRightIndex(i);
  let largest = 0;
  if (l <= A.heapSize && A[l] > A[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r <= A.heapSize && A[r] > A[largest]) {
    largest = r;
  }

  if (largest !== i) {
    // A[i] を A[largest]と交換する
    let tmp = A[i];
    A[i] = A[largest];
    A[largest] = tmp;

    // 再帰実行
    maxHeapify(A, largest);
  }

}

function buildMaxHeap(A) {
  A.heapSize = A.length;

  // ヒープの最下層の小要素からmaxHeapifyを実行する
  for (let i = Math.floor(A.length / 2); i > 0; i--) {
    maxHeapify(A, i);
  }

  return A;
}

console.log(buildMaxHeap([1, 6, 7, 10, 43, 4, 2, 6, 5]))