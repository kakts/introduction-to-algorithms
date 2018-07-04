const list = [10, 3, 6, 2, 3, 8, 7, 9, 5, 4, 1];

// list[j]をソート済みの列 list[1..j-1]に挿入する
for (let j = 1; j < list.length; j++) {
  const key = list[j];
  let i = j - 1;

  // 左側はソート済になっていくので毎回右に要素をずらしていく
  while (i >= 0 && list[i] > key) {
    list[i + 1] = list[i];
    i -= 1;
  }
  // in the last list[j] move to the first index
  list[i + 1] = key
  console.log(list);
}
console.log(list)