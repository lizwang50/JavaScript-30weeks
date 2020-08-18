## Target
To sort an array of band's names while ignoring the article: 'The', 'An' and 'A' which in front of the band's name.

Break down into steps:
1. Exclude the article from bands' name
  - e.g. for 'An Old Dog', sorting by 'Old Dog' instead of 'An Old Dog'
2. Insert HTML list element into the ul #bands
  - Array.prototype.sort() receives a callback function, which is able to deal with Step 1 while sorting.
3. The list elements inserted should remain the same as before.

## Key points

### Sorting with shorthands
Combine the shorthands of **arrow function** and **directly return value** to write more concise and elegant code.
  - Refactoring of Array sorting, Step 1.
    ```js
    const sortedBands = bands.sort(function(a, b) {
      if (stript(a) > stript(b)) {
        return 1;
      } else {
        return -1;
      }
    });
    ```

  - Refactoring of Array sorting, Step 2.
    ```js
    const sortedBands = bands.sort((a, b) => {
      return stript(a) > stript(b) ? 1 : -1;
    });
    ```

  - Refactoring of Array sorting, Step 3.
  ```js
  const sortedBands = bands.sort((a, b) => stript(a) > stript(b) ? 1 : -1);
  ```

### Self-memorizing function

My friend Etrex pointed out that my solution and the solution from Wesbos were both performed redundant function calls (24 times call for 13 array element) when sorting with a callback function and therefore I decide to refactor the `striptName()` function into a self-memorizing function.

The goal is to make sure that the function only compute once for each argument passed in (the band's name in this case).

- Functions are first-class objects

  Functions are objects in JavaScript, thus it is possible to add custom properties to them, and it is a way to store the computing results as well.

Here's my final workaround:

```js
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
  'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
  'Anywhere But Here', 'An Old Dog'
];

const excludeList = ['The', 'An', 'A'];

function striptName(a) {
  // to build cache of the function
  if (!striptName.cache) {
    striptName.cache = {};
  };

  // check if the result has been cached
  if (striptName.cache[a] !== undefined) {
    return striptName.cache[a];
  };

  const nameArr = a.split(' ');

  if (excludeList.includes(nameArr[0])) {
    nameArr.shift();
    return striptName.cache[a] = nameArr.join(' ');
  } else {
    return striptName.cache[a] = a;
  }
}

const sortedBands2 = bands.sort((a, b) => stript(a) > stript(b) ? 1 : -1);
```

Call `console.table(sortedBands);` to see formatted result:

| index | Value                     |
| ----- | ------------------------- |
| 0     | "Anywhere But Here"       |
| 1     | "The Bled"2"Counterparts" |
| 3     | "The Devil Wears Prada"   |
| 4     | "The Midway State"        |
| 5     | "Norma Jean"              |
| 6     | "Oh, Sleeper"             |
| 7     | "An Old Dog"              |
| 8     | "Pierce the Veil"         |
| 9     | "The Plot in You"         |
| 10    | "Say Anything"            |
| 11    | "A Skylit Drive"          |
| 12    | "We Came as Romans"       |
