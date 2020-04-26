const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('.time');
const dot = document.querySelector('.dot');
const audio = document.querySelector('.time-audio');
const chickHead = document.querySelector('.chick-head');

const caculateSeconds = (seconds) => {
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

const caculateMins = (mins) => {
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
}

const caculateHours = (hour) => {
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

const setDate = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const mins = date.getMinutes();
  const hour = date.getHours();
  time.innerHTML = date;
  caculateSeconds(seconds);
  caculateMins(mins);
  caculateHours(hour);
}

chickHead.addEventListener('click', () => {
  const msg = new SpeechSynthesisUtterance;
  msg.text = `${time.innerText.slice(16, 24)} 咕咕`;
  msg.rate = 2;
  speechSynthesis.speak(msg);
});

setInterval(setDate, 10);
