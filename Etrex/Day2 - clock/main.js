/**
 * util
 */
function noise(){
  return Math.random() * 40 - 20;
}

/**
 * mouse tracker
 */
let mouseX = 1000;
let mouseY = 1000;
function onMouseMove(event){
  const clock = document.querySelector("#clock").getBoundingClientRect();
  mouseX = event.pageX - clock.x;
  mouseY = event.pageY - clock.y;
}
document.addEventListener("mousemove", onMouseMove)

let clickCount = 0;
function onClick(){
  clickCount++;
}
document.addEventListener("click", onClick)


/**
 * dots init
 */
function initDots(){
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot)=>{
    dot.renderX = Math.random() * 600;
    dot.renderY = Math.random() * 600;
    dot.x = Math.random() * 600;
    dot.y = Math.random() * 600;    
  })
}
initDots();

/**
 * set dot style
 */
function update(dot, speed){
  dot.renderX += (dot.x - dot.renderX) * speed;
  dot.renderY += (dot.y - dot.renderY) * speed;
  dot.style.left = dot.renderX + "px";
  dot.style.top = dot.renderY + "px";

  const dx = dot.renderX - mouseX;
  const dy = dot.renderY - mouseY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  let blur;
  if(clickCount % 2 == 0){
    blur = Math.min(distance/100, 2);
  }else{
    blur = Math.max(2 - distance/100, 0);
  }
  dot.style.filter = `blur(${blur}px)`;

  let scale = blur + 1;
  dot.style.transform = `translate(-5px, -5px) scale(${scale})`;
}


function updateDots(){
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot)=>{
    update(dot, 0.05)
  })
}

function updateMs(ms){
  const dot = document.querySelector("#ms .dot");
  dot.x = Math.cos(2 * Math.PI * ms / 1000 - 0.5 * Math.PI) * 300 + 300;
  dot.y = Math.sin(2 * Math.PI * ms / 1000 - 0.5 * Math.PI) * 300 + 300;
  update(dot, 1)
}

function updateHand(selector, length, angle){
  const dots = document.querySelectorAll(selector);
  const gap = length / (dots.length - 1);
  for(let i = 0; i < dots.length ; i++){
    const dot = dots[i];
    const radius = i * gap;
    dot.x = Math.cos(angle - 0.5 * Math.PI) * radius + 300 + noise();
    dot.y = Math.sin(angle - 0.5 * Math.PI) * radius + 300 + noise();
  }
}

function updateSeconds(seconds){
  const angle = 2 * Math.PI * seconds / 60;
  updateHand("#second .dot", 250, angle);
}

function updateMinutes(minutes){
  const angle = 2 * Math.PI * minutes / 60;
  updateHand("#minute .dot", 200, angle);
}

function updateHours(hours){
  const angle = 2 * Math.PI * hours / 12;
  updateHand("#hour .dot", 100, angle);
}

function updateTime(time){
  const h1 = document.querySelector("#time");
  h1.innerText = time;
} 

function format(number){
  if(number >= 10)
    return number;
  return "0" + number;
}

function onEnterFrame(){
  const now = new Date();
  const ms = now.getMilliseconds();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  updateTime(format(hours) + ":" + format(minutes) + ":" + format(seconds));
  updateHours(hours + minutes / 60);
  updateMinutes(minutes);
  updateSeconds(seconds);
  updateMs(ms);
  updateDots();
}

setInterval(onEnterFrame, 10);
