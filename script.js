// Update date and time every second
function updateDateTime() {
  const now = new Date();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dayName = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12;

  document.getElementById('dayName').textContent = dayName;
  document.getElementById('dateDisplay').textContent = `${month} ${date}`;
  document.getElementById('timeDisplay').textContent = `${hours}:${minutes} ${ampm}`;
}

// Initialize on page load
updateDateTime();
setInterval(updateDateTime, 1000);
