// встановлення дати події  через 5 хв
const eventDate = new Date().getTime() + 5 * 60 * 1000;

const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = 'Час вийшов!';
    document.getElementById('subscribeBtn').disabled = true;
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days
    .toString()
    .padStart(2, '0');
  document.getElementById('hours').textContent = hours
    .toString()
    .padStart(2, '0');
  document.getElementById('minutes').textContent = minutes
    .toString()
    .padStart(2, '0');
  document.getElementById('seconds').textContent = seconds
    .toString()
    .padStart(2, '0');
}

// обробка кнопки "Підписатися"
document.getElementById('subscribeBtn').addEventListener('click', function () {
  const now = new Date().getTime();
  const timeLeft = Math.floor((eventDate - now) / 1000);

  if (timeLeft > 0) {
    document.getElementById(
      'message',
    ).textContent = `Дякуємо за підписку! Ви встигли! До завершення підписки залишалося ${timeLeft} с.`;
  } else {
    document.getElementById('message').textContent =
      'Час вийшов! Підписка неможлива.';
  }

  this.disabled = true;
});

updateCountdown();
