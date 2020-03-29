/*
Taipei Timezone
*/
const taipeiSecond = document.querySelector('#taipei-second');
const taipeiMin = document.querySelector('#taipei-min');
const taipeiHour = document.querySelector('#taipei-hour');

function setTaipeiDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = (seconds - 45) * 6;
  taipeiSecond.style.transform = `rotate(${secondDegrees}deg)`;
  
  const minDegrees = (mins - 45) * 6;
  taipeiMin.style.transform = `rotate(${minDegrees}deg)`;

  const hourDegrees = (hours % 12 - 9) * 30 + (mins % 60) * 0.5;
  taipeiHour.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setTaipeiDate, 1000);

/*
Tokyo Timezone
*/
const tokyoSecond = document.querySelector('#tokyo-second');
const tokyoMin = document.querySelector('#tokyo-min');
const tokyoHour = document.querySelector('#tokyo-hour');

function setTokyoDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = (seconds - 45) * 6;
  tokyoSecond.style.transform = `rotate(${secondDegrees}deg)`;

  const minDegrees = (mins - 45) * 6;
  tokyoMin.style.transform = `rotate(${minDegrees}deg)`;

  const hourDegrees = ((hours % 12 + 1) - 9) * 30 + (mins % 60) * 0.5;
  tokyoHour.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setTokyoDate, 1000);

/*
Los Angeles Timezone
*/
const losAngelesSecond = document.querySelector('#los-angeles-second');
const losAngelesMin = document.querySelector('#los-angeles-min');
const losAngelesHour = document.querySelector('#los-angeles-hour');

function setLosAngelesDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = (seconds - 45) * 6;
  losAngelesSecond.style.transform = `rotate(${secondDegrees}deg)`;

  const minDegrees = (mins - 45) * 6;
  losAngelesMin.style.transform = `rotate(${minDegrees}deg)`;

  const hourDegrees = ((hours % 12 - 15) - 9) * 30 + (mins % 60) * 0.5;
  losAngelesHour.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setLosAngelesDate, 1000);
