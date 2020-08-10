# Target - Day 14
Introducing the reference of an object and ways to copy an Array.

## Key points
- About reference:
  ```js
  a1 = [1, 2, 3];
  a2 = a1.slice();
  a3 = a1;
  a4 = [].concat(a1);

  a1[0] = 2;

  console.log(a1); // [2, 2, 3]
  console.log(a2); // [1, 2, 3]

  // been changed as well
  console.log(a3); // [2, 2, 3]
  console.log(a4); // [1, 2, 3]
  ```

- An object can have property which reference to a function.
  ```js
  var arr = ['a', 'b', 'c'];

  arr.test = function() { return 'Hi'; };
  arr.test(); // 'Hi'

  typeof(arr); // 'object'
  ```

- Create a 


## Additional Information
- To compare two arrays in JavaScript
  ```js
  a1 = [1, 2, 3];
  a2 = [1, 2, 3];

  JSON.stringify(a1) === JSON.stringify(a2); // true
  ```
