function spinFood() {
  const foodNameEl = document.getElementById('foodName');
  const againBtn = document.getElementById('againBtn');
  let spinInterval;

  // Disable both buttons while spinning
  document.getElementById('generateBtn').disabled = true;
  againBtn.disabled = true;

  // Start fast random spin
  spinInterval = setInterval(() => {
    const random = foods[Math.floor(Math.random() * foods.length)];
    foodNameEl.textContent = random;
  }, 100); // change every 100ms

  // Stop after 5 seconds
  setTimeout(() => {
    clearInterval(spinInterval);
    const finalFood = foods[Math.floor(Math.random() * foods.length)];
    foodNameEl.textContent = finalFood;

    againBtn.style.display = 'inline-block';
    document.getElementById('generateBtn').disabled = false;
    againBtn.disabled = false;
  }, 5000); // 5 seconds
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('generateBtn').addEventListener('click', spinFood);
  document.getElementById('againBtn').addEventListener('click', spinFood);
});
