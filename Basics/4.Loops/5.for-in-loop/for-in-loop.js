// for in loop
// for in loop works with object's keys and values to iterate over them
// for in loop is used when we don't know the keys of the object
let person = {
  name: "John",
  age: 30,
  city: "New York",
  isMarried: true,
}
// for in loop
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}