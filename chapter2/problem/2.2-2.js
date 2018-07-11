// iに対するループをするたびに iより右側のindexの配列に関しては昇順にソートされる。
// list.length - 1まで操作することで、最後の要素から右側が昇順になっていることが保証される。
// 裁量時
const list = [2, 6, 3, 1, 5, 9, 4, 1, 0, 10, 4, 7];

for (let i = 0; i < list.length - 1; i++) {

  let minData = null;
  for (let j = i; j < list.length; j++) {
    if (minData === null) {
      minData = {
        index: j,
        min: list[j]
      };
      continue;
    }
    if (minData.min > list[j]) {
      minData = {
        index: j,
        min: list[j]
      };
    }
  }
  let tmp = list[i];
  list[i] = minData.min;
  list[minData.index] = tmp 

}
console.log(list);