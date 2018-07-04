const list = [10, 3, 5, 4, 1, 2, 7, 6, 7, 9];

// insertion sort for ascending order
for (let j = 1; j < list.length; j++) {
  const target = list[j];

  // for checking the left side of the list from the target data
  let i = j - 1;
  // if the left side of the target is bigger than target.
  while (i >= 0 && list[i] > target) {
    list[i + 1] = list[i];
    i -= 1;
  }
  list[i + 1] = target;
  console.log(list);
}
console.log(list);