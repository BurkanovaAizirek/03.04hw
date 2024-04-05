
let counterValue = 0;
const counter = document.getElementById('counter');

function updateCounter() {
  counter.textContent = counterValue;
}

function decrease() {
  counterValue--;
  updateCounter();
}

function increase() {
  counterValue++;
  updateCounter();
}

function reset() {
  counterValue = 0;
  updateCounter();
}