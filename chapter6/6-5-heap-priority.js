
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


function heapMaximum(A) {
  // 配列の先頭が最大値
  return A[0];
}

// 実行時間はO(lgn) maxHeapifyがO(lgn)
function heapExtractMax(A) {
  if (A.heapSize < 1) {
    throw new Error("Underflow");
  }

  let max = A[0];
  A[0] = A[A.heapSize - 1];
  A.heapSize = A.heapSize - 1;
  maxHeapify(A, 1);

  return max;
}

function heapIncreaseKey(A, i, key) {
  if (key < A[i]) {
    throw new Error("The new key is less than current key");
  }

  A[i] = key;
  let parentIndex = parent(i);
  while (i > 0 && A[parentIndex] < A[i]) {
    let tmp = A[i];
    A[i] = A[parentIndex];
    A[parentIndex] = tmp;

    i = parentIndex;
  }
}

function maxHeapInsert(A, key) {
  A.heapSize = A.heapSize + 1;
  A[A.heapSize - 1] = -Infinity;
  heapINcreaseKey(A, A.heapSize, key);
}