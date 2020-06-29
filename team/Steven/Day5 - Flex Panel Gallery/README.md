# Target
Make animation effect by CSS and JavaScript.
Using:
- CSS flex, transform, transition. 
- JavaScript events and class toggle.

## Key points
- The propertyName called just "flex" in Safari rather than "flex-grow" in other browsers, so here using `propertyName.includes('flex')` to get compatibility.
- Listen to 'transitionend' event to get the property which has changed.

```js
const panels = document.querySelectorAll('.panel');

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```

- 3 ways to turn NodeList into an array
```js
let panels = document.querySelectorAll('.panel');

let arr1 = [...panels];
let arr2 = Array.from(panels);
let arr3 = [].slice.call(panels); // [].slice === Array.prototype.slice;
```

## Reference
- [flex.io](https://flexbox.io/): A simple, free 20 video course.
