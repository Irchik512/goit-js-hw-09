import getRandomHexColor from './helpers/getRandomHexColor';
const startBtnRef = document.querySelector('button[data-start]');
let timerId;

startBtnRef.addEventListener('click', () => {
  startBtnRef.setAttribute('disabled', 'on');
  timerId = setInterval(() => {
    document.querySelector('body').style.backgroundColor = getRandomHexColor();
  }, 1000);
});

document.querySelector('button[data-stop]').addEventListener('click', () => {
  clearInterval(timerId);
  if (startBtnRef.hasAttribute('disabled')) {
    startBtnRef.removeAttribute('disabled');
  }
});
