const taipeiSecond = document.querySelector('#taipei-second');
const taipeiMin = document.querySelector('#taipei-min');
const taipeiHour = document.querySelector('#taipei-hour');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  taipeiSecond.style.transform = `rotate(${secondDegrees}deg)`;
  
  const mins = now.getMinutes();
  const minDegrees = ((mins / 60) * 360) + 90;
  taipeiMin.style.transform = `rotate(${minDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  taipeiHour.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);
