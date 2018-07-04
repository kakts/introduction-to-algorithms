// insertion sort を非増加順(descending order)でソートさせる

const list = [2, 10, 3, 8, 6, 2, 1, 6, 4];
for (let j = 1; j < list.length; j++) {
  const target = list[j];
  let i = j - 1;
  while(i >= 0 && list[i] < target) {
    list[i + 1] = list[i];
    i -= 1;
  }
  list[i + 1] = target;
}
console.log(list)