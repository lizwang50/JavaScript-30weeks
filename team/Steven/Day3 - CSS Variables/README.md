# Target
Practice of the usage of CSS variable and how to manipulate it by JS.

## 重點整理

1. Usage of CSS variable.
  ```css
  :root {
    --base: #fff;
    --spacing: 10px;
    --blur: 10px;
  }

  img {
    padding: var(--spacing);
    background: var(--base);
    filter: blur(var(--blur));
  }
  ```

2. Control CSS variable with JS
  ```js
  document.documentElement.style.setProperty(`--blur`, value);
  ```

- dataset
Like `getAttribute`, using `dataset` can get the specified `data-` attribute from tatget.
```js
<div id="foo" data-hello="world"></div>

document.querySelector('#foo').dataset.hello // get: "world"
document.querySelector('#foo').getAttribute('data-hello'); // "world"
```