import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import convertMs from './helpers/convertMs';
import addLeadingZero from './helpers/addLeadingZero';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnRef = document.querySelector('button[data-start]');
const inputRef = document.querySelector('#datetime-picker');
let timerId;
let chosenDateMS;

btnRef.setAttribute('disabled', 'on');

flatpickr(inputRef, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.parse(selectedDates[0]) <= Date.now()) {
      Notify.failure('Please choose a date in the future');
    } else {
      btnRef.removeAttribute('disabled');
    }
    return (chosenDateMS = Date.parse(selectedDates[0]));
  },
});

btnRef.addEventListener('click', () => {
  timerId = setInterval(() => {
    const diferendMS = chosenDateMS - Date.now();
    const timeToEnd = convertMs(diferendMS);
    addLeadingZero(timeToEnd);
    if (diferendMS <= 999) {
      clearInterval(timerId);
      inputRef.removeAttribute('disabled');
    }
  }, 1000);
  inputRef.setAttribute('disabled', 'on');
  btnRef.setAttribute('disabled', 'on');
});
