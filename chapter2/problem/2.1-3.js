
const list = [2, 10, 3, 8, 6, 2, 1, 6, 4];
const v = Number(process.argv[2]);
function search(list, v) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === v) {
      return i;
    }
  }
  return null;
}

console.log(search(list, v));