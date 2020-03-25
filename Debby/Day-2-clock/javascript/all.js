const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');



function setDate() {
  const now = new Date();

  const minseconds = now.getMilliseconds() / 1000 ;
  const seconds = now.getSeconds() + minseconds;  // 讓秒數取到毫秒
  // console.log(seconds);
  const mins = now.getMinutes();
  const hours = now.getHours();

  const newMins = mins + seconds / 60;

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// setInterval : 指定某個時間重複執行
setInterval(setDate,1000);
setDate();