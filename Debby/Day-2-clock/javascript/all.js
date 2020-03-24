const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  // 抓到今日
  const now = new Date();
  // console.log(now);

  // 抓到秒
  const seconds = now.getSeconds();
  // console.log(second);

  // 計算一秒選轉的度數。
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  // console.log(secondsDegrees);
  // 為什麼要加 90 ?
  // 沒有加 90 度的話，指針會從橫向 0° 開始旋轉，因為 css 的指針是寫 height : 2px / with: 50%;


  // 將計算出來的度數，套到 CSS。
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // 抓到分鐘;
  const mins = now.getMinutes();
  // console.log(mins);

  const minsDegrees = ((mins/60) * 360) + ((seconds/60) * 6) + 90;
  // (mins / 60) * 360) -> 分針在每分鐘會轉的度數。
  // ((seconds/60) * 6) -> 分針在每一秒會轉的度數。

  // console.log(minsDegrees);
  // console.log(mins/60);
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  // 抓到小時;
  const hours = now.getHours();
  const hoursDegrees = ((hours/12) * 360) + ((mins/60) * 30) + 90;
  // (hours / 12) * 360) -> 時針在每小時會轉的度數。
  // ((mins / 60)* 30) -> 時針在每分鐘會轉的度數。
  console.log((mins/60) * 30);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// setInterval : 指定某個時間重複執行
setInterval(setDate,1000);
setDate();