// 4.1 最大部分配列問題

// 与えられた配列の中から中間点(mid)をまたいだ最大部分配列をもとめる
function findMaxCrossingSubArray(list, low , mid, high) {

  // 左半分の最大部分配列を決定する
  let leftSum = -Infinity;  // これまでに発見した最大の和
  let sum = 0; 
  let maxLeft = 0;

  // midから開始し、lowまで減らす
  // したがって 調べられる任意の部分配列の形は list[i...mid]
  for (let i = mid; i >= low; i--) {
    sum += list[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }

  // 右半分の最大部分配列を決定する
  let rightSum = -Infinity;
  sum = 0;
  let maxRight = 0;
  for (j = mid + 1; j < high; j++) {
    sum += list[j];
    if (sum > rightSum) {
      rightSum = sum;
      maxRight = j;
    }
  }

  // 左右それぞれの最大部分配列のインデックスと 最大部分配列の和
  return {
    low: maxLeft,
    high: maxRight,
    sum: leftSum + rightSum
  };
}

// 
function findMaximumSubArray(list, low, high) {
  if (high == low) {
    return {
      low,
      high,
      sum: list[low]
    }; // 基底: 要素数1
  }

  // 中間値のインデックス
  let mid = Math.floor((low + high) / 2);

  // 左右の最大部分配列を取得する
  const leftMaximum = findMaximumSubArray(list, low, mid);

  const rightMaximum = findMaximumSubArray(list, mid + 1, high);

  // 中間値をまたいだ最大部分配列
  const crossingMaximum = findMaxCrossingSubArray(list, low, mid, high);

  if (leftMaximum.sum >= rightMaximum.sum && leftMaximum.sum >= crossingMaximum.sum) {
    return leftMaximum;
  } else if (rightMaximum.sum >= leftMaximum.sum && rightMaximum.sum >= crossingMaximum.sum) {
    return rightMaximum;
  } else {
    return crossingMaximum;
  }
}


const list = [1, 4, 2, -500, 5, 3, 2, 100];
console.log(findMaximumSubArray(list, 0, list.length))


