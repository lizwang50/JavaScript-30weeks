# Target
Learning the basic methods of Array.

## Key points
- console.table()
Print result as table.

- `filter`
```js
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

console.table(fifteen);
```

- `sort`
Sort the inventors by birthdate, oldest to youngest.
```js
// -1: front, 1: behind
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

console.table(ordered);

// addition of sort()
if (a < b) {
  return -1;
}; // bring a to front

if (a > b) {
  return 1;
} // move a behind b

if (a = b) {
  return 0;
} // move nothing
```

- `reduce`
Count the number of elements in an array.
```js
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportations = data.reduce((obj, ele) => {
  if (!obj[ele]) {
    obj[ele] = 0
  };
  obj[ele]++;

  return obj
}, {})

console.log(transportations);
// {bike: 2, car: 5, pogostick: 1, truck: 3, van: 2, walk: 2}
```
