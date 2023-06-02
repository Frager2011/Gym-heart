
function submitForm() {
  const form =document.getElementById('form');
  const name = form.elements.name.value;
  const restingRate = form.elements.Resting.value;
  const activeRate = form.elements.Active.value;
  const hour = form.elements.Hour.value;

  const lastSubmitTime = localStorage.getItem('lastSubmitTime');

  if (lastSubmitTime) {
    const delay = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
    const timeSinceLastSubmit = Date.now() - lastSubmitTime;
    const timeLeft = delay - timeSinceLastSubmit;
    if (timeLeft > 0) {
      const minutesLeft = Math.floor(timeLeft / (60 * 1000));
      const hoursLeft = Math.floor(minutesLeft / 60);
      const remainingMinutes = minutesLeft % 60;
      const message = `You cannot submit again for another ${hoursLeft} hours and ${remainingMinutes} minutes.`;
      document.getElementById('message').textContent = message;
      return;
    }
  }

  localStorage.setItem('lastSubmitTime', Date.now());
  form.action = "https://script.google.com/macros/s/AKfycby1VLH0JXfBLhP4pQ03jgsM7_BQM-3cADaESQR2uM6tg43nJUSWXZqspH8ZMhCw8ogh/exec";
  form.submit();
}