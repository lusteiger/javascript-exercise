function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const result = collection.filter(Number => {
    return Number % 3 === 0;
  });
  return result;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const result = collection.filter((word, index) => {
    return collection.indexOf(word) === index;
  });
  return result;
}
export { chooseMultiplesOfThree, chooseNoRepeatNumber };
