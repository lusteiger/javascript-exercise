export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码

  let count = 0;
  for (const i in collection) {
    if (collection[i].startsWith('粤A')) count++;
  }
  return count;
}
