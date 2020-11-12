let html = document.querySelector('html');

let color = [];
let selector = 0;
let colorChanger = [1,1,1];

let debug = false;

for (let i = 0; i < 3; i++)
  color[i] = random(128) + 64;

setInterval(() => {
  if (random(100) > 80) selector++;
  selector %= 3;
  if (color[selector] >= 200) colorChanger[selector] = -colorChanger[selector];
  else if (color[selector] <= 70) colorChanger[selector] = -colorChanger[selector];

  color[selector] += colorChanger[selector];

  html.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;

  if (debug) console.log(color);
}, 75);

function random(i) {
  return Math.floor(Math.random() * i);
}
