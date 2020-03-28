const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('.time')
const dot = document.querySelector('.dot')

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

setInterval(setDate, 10);
