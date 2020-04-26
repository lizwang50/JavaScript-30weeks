const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const secondNumber = document.querySelector('.secondNumber');
const minNumber = document.querySelector('.minNumber');
const hourNumber = document.querySelector('.hourNumber');

const setDate = () => {
  const now = new Date();
  const secondsNormal = now.getSeconds();
  const minsNormal = now.getMinutes();
  const hoursNormal = now.getHours();

  const seconds = secondsNormal + now.getMilliseconds() / 1000;
  const secondsDegrees = ((seconds / 60 ) * 360 );
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  secondNumber.innerHTML = secondsNormal;
  //console.log(seconds);
  const mins = minsNormal + seconds / 60;
  const minutesDegrees = ((mins / 60 ) * 360 );
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  minNumber.innerHTML = minsNormal;
  //console.log(mins);

  const hours = hoursNormal + mins / 60;
  const hoursDegrees = ((hours / 12 ) * 360 );
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  hourNumber.innerHTML = hoursNormal;
  //console.log(hours);
}
setInterval(setDate,10);