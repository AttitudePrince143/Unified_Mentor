const addTimerBtn = document.getElementById('addTimerBtn');
const datetimeInput = document.getElementById('datetime');
const timersContainer = document.getElementById('timersContainer');
const beepSound = document.getElementById('beepSound');

function createTimerBox(targetDate) {
  const timerBox = document.createElement('div');
  timerBox.className = 'timer-box';

  const title = document.createElement('h3');
  title.textContent = `Countdown to ${targetDate.toLocaleString()}`;
  timerBox.appendChild(title);

  const timeValues = document.createElement('div');
  timeValues.className = 'time-values';
  timerBox.appendChild(timeValues);

  const timerId = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(timerId);
      timeValues.innerHTML = `<span>Time's up! 🎉</span>`;
      timerBox.style.animation = 'flash 1s ease-in-out';
      beepSound.play();
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timeValues.innerHTML = `
      <div><span>${String(days).padStart(2, '0')}</span> Days</div>
      <div><span>${String(hours).padStart(2, '0')}</span> Hours</div>
      <div><span>${String(minutes).padStart(2, '0')}</span> Minutes</div>
      <div><span>${String(seconds).padStart(2, '0')}</span> Seconds</div>
    `;
  }, 1000);

  return timerBox;
}

addTimerBtn.addEventListener('click', () => {
  const targetDate = new Date(datetimeInput.value);
  if (isNaN(targetDate)) {
    alert("Please select a valid future date and time.");
    return;
  }

  const timerBox = createTimerBox(targetDate);
  timersContainer.appendChild(timerBox);
  datetimeInput.value = '';
});
