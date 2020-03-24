const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const secondNumber = document.querySelector('.secondNumber');
const minNumber = document.querySelector('.minNumber');
const hourNumber = document.querySelector('.hourNumber');

const setDate = () => {
  const now = new Date()

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60 ) * 360 );
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  secondNumber.innerHTML = seconds;
  // console.log(seconds)
  const mins = now.getMinutes();
  const minutesDegrees = ((mins / 60 ) * 360 );
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  minNumber.innerHTML = mins;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12 ) * 360 );
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  hourNumber.innerHTML = hours;
}
setInterval(setDate,1000);