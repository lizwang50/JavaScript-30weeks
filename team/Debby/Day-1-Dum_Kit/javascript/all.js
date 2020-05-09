function playSound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const keybox = document.querySelector(`div.keybox[data-key="${e.keyCode}"]`);
   if(!audio) return;
   // console.log(e.keyCode);
   // console.log(audio);
   // console.log(keybox);
   audio.currentTime = 0;
   audio.play();
   keybox.classList.add('active');
};

function clickSound(e) {
  if(e.target.className !== 'keybox' ) return;
  console.log(e.target.dataset.key);
  const datakey = e.target.dataset.key;
  const audio = document.querySelector(`audio[data-key="${datakey}"]`);
  audio.currentTime = 0;
  audio.play();
}


function removeTransition(e){
  if(e.propertyName !== 'background-color') return;
  // console.log(e.propertyName);
  this.classList.remove('active');
};

const keyboxs = document.querySelectorAll('.keybox');
keyboxs.forEach(keybox => keybox.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown',playSound);
window.addEventListener('click',clickSound);