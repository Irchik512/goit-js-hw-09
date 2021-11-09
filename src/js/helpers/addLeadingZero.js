export default function addLeadingZero({ days, hours, minutes, seconds }) {
  document.querySelector('span[data-days]').textContent = days.toString().padStart(2, 0);
  document.querySelector('span[data-hours]').textContent = hours.toString().padStart(2, 0);
  document.querySelector('span[data-minutes]').textContent = minutes.toString().padStart(2, 0);
  document.querySelector('span[data-seconds]').textContent = seconds.toString().padStart(2, 0);
}
