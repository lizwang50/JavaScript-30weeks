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

function noise(){
  return Math.random() * 40 - 20;
}

function update(dot, speed){
  dot.renderX += (dot.x - dot.renderX) * speed;
  dot.renderY += (dot.y - dot.renderY) * speed;
  dot.style.top = dot.renderX + "px";
  dot.style.left = dot.renderY + "px";
}

function updateDots(){
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot)=>{
    update(dot, 0.05)
  })
}

function updateMs(ms){
  const dot = document.querySelector("#ms .dot");
  dot.x = Math.cos(-2 * Math.PI * ms / 1000) * 300 + 300;
  dot.y = Math.sin(-2 * Math.PI * ms / 1000) * 300 + 300;
  update(dot, 1)
}

function updateHand(selector, length, angle){
  const dots = document.querySelectorAll(selector);
  const gap = length / (dots.length - 1);
  for(let i = 0; i < dots.length ; i++){
    const dot = dots[i];
    const radius = i * gap;
    dot.x = Math.cos(angle) * radius + 300 + noise();
    dot.y = Math.sin(angle) * radius + 300 + noise();
  }
}

function updateSeconds(seconds){
  const angle = -2 * Math.PI * seconds / 60;
  updateHand("#second .dot", 250, angle);
}

function updateMinutes(minutes){
  const angle = -2 * Math.PI * minutes / 60;
  updateHand("#minute .dot", 200, angle);
}

function updateHours(hours){
  const angle = -2 * Math.PI * hours / 12;
  updateHand("#hour .dot", 100, angle);
}

function updateTime(time){
  const h1 = document.querySelector("#time");
  h1.innerText = time;
} 

function format(number){
  if(number > 10)
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