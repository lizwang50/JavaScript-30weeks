# Target
Introduce how to make a cool text-shadow effect which will moving with mouse pinter.
## Key points
Get the position from the property of mousemove event.

```js
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  // e = mousemove event; offsetX and offsetY are the position of the pointer
  let { offsetX: x, offsetY: y } = e;
  // ...omit
```