# Target
按下畫面上對應的按鈕，演出音效和按鈕的特效。

## 重點整理
1. 監聽整個網頁發生的按鍵按下的事件 (keydown)，同時綁定執行一個 function `playSound()`
   ```js
   window.addEventListener('keydown', playSound);
   ```
## 補充

- `keydown`, `keypress` and `keyup` 
  - keydown: 任何按鍵都能觸發。This event occurs when a keyboard key is pressed.
    `$(selector).keydown(function)` // Attaches a function to the key down event
  - keydown: Triggered by any key.
  - keypress: This event is similar to keydown event. 
  - keypress: 一些沒有輸出字元的按鍵無法觸發，例如方向鍵和 `ESC`。
  - keyup: This event occurs when a keyboard key is released.

- audio tag 的屬性和用法：
  - currentTime: Sets or returns the current playback position in the audio/video (in seconds). 
  - play(): To play the audio.  - autoplay: Auto play the audio when loading finish.  - controls: Sets or returns whether the audio/video should dispay controls (play, pause etc.) - loop: Sets or returns whether the audio/video should start over again when finished.
  - volume: Sets or returns the volume of the audio/video.
  - Stop playing:
    ```js
    let sound = new Audio("bell.wav");

    function myStop() {
      sound.pause();
      sound.currentTime = 0;
    }

- NodeList:
`document.querySelectorAll()` returns a `NodeList` object, this is a collection of nodes.  
- Its is possible to iterate over it with `forEach()`.
- Dome older browsers have not implemented `NoodeList.forEach()` nor `Array.from()`, This can be circumented by using `Array.prototype.forEach()`. [See this Example fomr MDN](https://developer.mozilla.org/en-US/docs/Web/API/NodeList#Example).

```js
const keys = document.querySelectorAll('.key');
Array.prototype.forEach.call(keys, key => key.addEventListener('transitionend', removeTransition));
```

## References
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [w3schools.com](https://www.w3schools.com/tags/ref_av_dom.asp)
- [keycode.info](http://keycode.info/) - shows keyCode
