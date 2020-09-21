export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const found = collection.find(person => {
    return person.age <= 20 && person.age >= 10;
  });
  return found.name;
}
